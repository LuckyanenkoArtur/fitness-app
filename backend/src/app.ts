import express, { Express, Request, Response } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import { corsOptions } from "./config/corsOptions";
import credentials from "./middlewares/credentials";
import verifyJWT from "./middlewares/verifyJWT";

// Imports Routes
import indexHandlers from "./routes/root";
import workoutsHandlers from "./routes/workouts";
import schedulesHandlers from "./routes/schedules";
import authHandlers from "./routes/auth";

const app: Express = express();
const port: number = 5000;

app.use(express.static("public")); //Setup the public folder for sending photos
app.use(express.json()); // Enable JSON data to be handled

app.use(credentials);
app.use(cors(corsOptions)); // Enable CORS
app.use(cookieParser());

// #--------------------------------------Routers Version 1.0.0----------------------------------------------#

app.use("/", indexHandlers);
app.use(verifyJWT);
app.use("/auth", authHandlers);
app.use("/workouts", workoutsHandlers);
app.use("/schedules", schedulesHandlers);

// Router Handler for 404
app.all("*", (req: Request, res: Response) => {
  if (req.accepts("html")) {
    const filepath: string = path.join(__dirname, "views", "404.html");
    return res.sendFile(filepath);
  }
  return res.status(404);
});

// #-------------------------------------------------------------------------------------------#

app.listen(port, () => {
  console.log(
    `[server]: Server is running at http://localhost:${port.toString()}`
  );
});
