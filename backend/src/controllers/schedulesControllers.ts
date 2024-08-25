import db from "../db/index";
import { Response, Request } from "express";

const getAllSchedules = async (req: Request, res: Response) => {
  try {
    const { state = "Все" } = req.query; // Get state from query parameters

    if (state === "Все") {
      const query = await db.query(
        `SELECT id, start_date, workout_title, trainer, state_name FROM schedule_details;`
      );
      return res.json({
        data: query.rows,
      });
    }

    const query = await db.query(
      `SELECT id, start_date, workout_title, trainer, state_name FROM schedule_details WHERE state_name = '${state}';`
    );

    return res.json({
      data: query.rows,
    });
  } catch (err) {
    console.log(err);
  }
};

const addSchedule = async (req: Request, res: Response) => {
  try {
    const user_id = 1;
    const { start_date, workout_trainer, workout_id, workout_title } = req.body;

    if (!start_date || !workout_trainer || !workout_id || !workout_title) {
      return res.status(400).json({ message: "All data should be provided" });
    }

    const insertSchedule = await db.query(
      ` INSERT INTO schedules (start_date, user_id, workout_id, state_id)
        VALUES ('${start_date}', '${user_id}', '${workout_id}', '1')`
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

const cancelSchedule = async (req: Request, res: Response) => {
  try {
    const { id, state_id } = req.body;

    if (!id || !state_id) {
      return res.status(400).json({ message: "All data should be provided" });
    }

    const updateClient = await db.query(
      `UPDATE schedules
       SET state_id = '${state_id}'
       WHERE id = '${id}'`
    );

    if (updateClient.rowCount === 1) {
      return res.status(200).json({
        message: "schedule is updated",
      });
    }

    return res.status(400).json({
      message: "While creaing user error is rised",
    });
  } catch (err) {
    console.log(err);
  }
};

export { getAllSchedules, addSchedule, cancelSchedule };
