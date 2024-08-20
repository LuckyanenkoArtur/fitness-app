import express, { Router } from "express";
import {
  getAllSchedules,
  cancelSchedule,
  addSchedule,
} from "../controllers/schedulesControllers";

const router: Router = express.Router();

router.get("/", getAllSchedules);
router.post("/", addSchedule);
router.put("/:id", cancelSchedule);

export default router;
