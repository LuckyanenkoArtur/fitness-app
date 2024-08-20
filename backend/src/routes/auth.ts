import express, { Router, Response, Request } from "express";
import { login, logout } from "../../controllers/authControlers";

const router: Router = express.Router();

// #--------------------------login router -----------------------------------#
router.post("/login", login);
// #--------------------------------------------------------------------------#

// #-------------------------logout router -----------------------------------#
router.post("/logout", logout);
// #--------------------------------------------------------------- ----------#

export default router;
