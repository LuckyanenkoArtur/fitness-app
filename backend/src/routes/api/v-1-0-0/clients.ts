// # ------------------------------IMPORTS-------------------------------#
// Import Express.js and router
import express, { Router } from "express";
// import autocompletesControllers from "../../../controllers/v-1-0-0/autocompletesControllers";
// # ---------------------------------------------------------------------#

const router: Router = express.Router();

// #--------------------------login router -----------------------------------#
router.get("/clients");
router.get("/vechels");
router.get("/drivers");
// #--------------------------------------------------------------------------#

export default router;
