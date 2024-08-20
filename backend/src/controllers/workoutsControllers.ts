import db from "../db/index";
import { Response, Request } from "express";

const getAllWorkouts = async (req: Request, res: Response) => {
  try {
    const query = await db.query(`SELECT * FROM clients_view;`);

    return res.json({
      data: query.rows,
    });
  } catch (err) {
    console.log(err);
  }
};

export { getAllWorkouts };
