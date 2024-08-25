import db from "../db/index";
import { Response, Request } from "express";

interface Row {
  id: number;
  title: string;
  trainer: string;
  duration: string;
  photo: string;
}

const getUser = async (req: Request, res: Response) => {
  try {
    const query = await db.query(`SELECT id, firstname FROM users;`);

    return res.json({
      data: query.rows,
    });
  } catch (err) {
    console.log(err);
  }
};
const addUser = async (req: Request, res: Response) => {
  try {
    const { username, password, firstname, lastname, surename } = req.body;

    const query = await db.query(
      `SELECT id FROM users WHERE username = '${username}';`
    );

    if (query.rowCount === 1) {
      return res.status(200).json({
        message: "Client is exist",
      });
    }

    if (!username || !password || !firstname || !lastname || !surename) {
      return res.status(400).json({ message: "All data should be provided" });
    }

    const insertSchedule = await db.query(
      ` INSERT INTO users (username, password, firstname, lastname, surename)
        VALUES ('${username}', '${password}', '${firstname}', '${lastname}', '${surename}')`
    );

    if (insertSchedule.rowCount === 1) {
      return res.status(200).json({
        message: "Client is created",
      });
    }

    return res.status(400).json({
      message: "While creaing user error is rised",
    });
  } catch (err) {
    console.log(err);
  }
};

export { addUser, getUser };
