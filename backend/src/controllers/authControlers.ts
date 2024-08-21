import jwt from "jsonwebtoken";
import { Response, Request } from "express";
import db from "../db/index";

interface Credentionls {
  username: string;
  password: string;
}

const login = async (req: Request, res: Response) => {
  try {
    const { username, password }: Credentionls = req.body;

    if (!username || !password) {
      console.log("Username and password are required");
      return res
        .status(400)
        .json({ message: "Имя пользователя или пароль необходимо заполнить!" });
    }

    const queryGetUserInfo = await db.query(
      `SELECT id, username, password FROM users WHERE users.username = '${username}';`
    );

    if (queryGetUserInfo.rowCount === 0) {
      return res.status(400).json({
        message: "Unathorized",
        code: 401,
        descriprion: "Проверьте вводимые данные!",
      });
    }

    const usersCredentials = queryGetUserInfo.rows[0];

    if (usersCredentials.password !== password) {
      return res.status(400).json({
        message: "Unathorized",
        code: 401,
        descriprion: "Проверьте вводимые данные!",
      });
    }

    const acessToken: string = jwt.sign(
      {
        UserInforamation: {
          username: usersCredentials.username,
          user_id: usersCredentials.id,
        },
      },
      "myAccessTokenSecret",
      {
        expiresIn: "1h",
      }
    );
    const refreshToken: string = jwt.sign(
      { username: usersCredentials.username, user_id: usersCredentials.id },
      "myRefreshTokenSecret",
      {
        expiresIn: "3600s",
      }
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ acessToken });
  } catch (error) {
    console.log(error);
  }
};

const logout = async (req: Request, res: Response) => {
  const cookies = req.cookies;
  res.clearCookie("refreshToken", { httpOnly: true });
  return res.sendStatus(204);
};

export { login, logout };
