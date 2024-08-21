import db from "../db/index";
import { Response, Request } from "express";

interface Row {
  id: number;
  title: string;
  trainer: string;
  duration: string;
  photo: string;
}

const getAllWorkouts = async (req: Request, res: Response) => {
  try {
    const query = await db.query(`SELECT * FROM workouts;`);

    query.rows.map((row: Row) => {
      return (row.photo = `http://localhost:5000/photos/${row.id}.jpg`);
    });

    return res.json({
      workouts: query.rows,
    });
  } catch (err) {
    console.log(err);
  }
};

export { getAllWorkouts };
