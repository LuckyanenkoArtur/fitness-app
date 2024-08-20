import db from "../db/index";
import { Response, Request } from "express";

const getAllSchedules = async (req: Request, res: Response) => {
  try {
    const query = await db.query(`SELECT * FROM clients_view;`);

    return res.json({
      data: query.rows,
    });
  } catch (err) {
    console.log(err);
  }
};

const addSchedule = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, surename, status, phone, comment } = req.body;

    if (!firstname || !lastname || !surename || !status || !comment || !phone) {
      return res.status(400).json({ message: "All data should be provided" });
    }

    const clientExistQuery = await db.query(
      `SELECT * FROM clients_view WHERE phone = '${phone}';`
    );

    if (clientExistQuery.rowCount >= 1)
      return res.status(400).json({ message: "Client exist" });

    const insertUser = await db.query(
      ` INSERT INTO clients (lastname, firstname, surename, status, phone, comment)
        VALUES ('${lastname}', '${firstname}', '${surename}', '${status}', '${phone}','${comment}')`
    );

    if (insertUser.rowCount === 1) {
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

const cancelSchedule = async (req: Request, res: Response) => {
  const { id, firstname, lastname, surename, status, phone, comment } =
    req.body;

  if (!firstname || !lastname || !surename || !status || !comment || !phone) {
    return res.status(400).json({ message: "All data should be provided" });
  }

  const updateClient = await db.query(
    `UPDATE clients
     SET lastname = '${lastname}',
         firstname = '${firstname}',
         surename = '${surename}',
         status = '${status}',
         phone = '${phone}',
         comment = '${comment}'
     WHERE id = '${id}'`
  );

  if (updateClient.rowCount === 1) {
    return res.status(200).json({
      message: "Client is created",
    });
  }

  return res.status(400).json({
    message: "While creaing user error is rised",
  });
};

export { getAllSchedules, addSchedule, cancelSchedule };
