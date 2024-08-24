import express, { Router } from "express";
import { getUser, addUser } from "../controllers/userControllers";

const router: Router = express.Router();

router.get("/", getUser);
router.post("/", addUser);

export default router;
