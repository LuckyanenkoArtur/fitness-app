import express, { Router, Response, Request } from "express";
import path from "path";

const router: Router = express.Router();

router.get("^/$|/index(.html)?", (req: Request, res: Response) => {
  res.setHeader("Content-Type", "text/html");
  res.status(200).sendFile(path.join(__dirname, "..", "views", "index.html"));
});

export default router;
