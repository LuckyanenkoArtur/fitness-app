import express, { Router } from "express";
import { getAllWorkouts } from "../controllers/workoutsControllers";

const router: Router = express.Router();

router.get("/", getAllWorkouts);

export default router;
