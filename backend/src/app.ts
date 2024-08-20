// import cors from "cors";
import express, { Express, Request, Response } from "express";
import path from "path";
// import cookieParser from "cookie-parser";
// import { corsOptions } from "./config/corsOptions";
// import credentials from "./middlewares/credentials";
// import verifyJWT from "./middlewares/verifyJWT";

import clientsHandler from "./routes/api/v-1-0-0/clients";

const app: Express = express();
const port: number = 5000;

// app.use(express.static("public")); //Setup the public folder for sending photos
// app.use(express.json()); // Enable JSON data to be handled

// app.use(credentials);
// app.use(cors(corsOptions)); // Enable CORS
// app.use(cookieParser());

// #--------------------------------------Routers Version 1.0.0----------------------------------------------#
// app.use("/", require("./routes/root"));
// app.use("/auth", require("./routes/api/v-1-0-0/auth"));
// app.use(verifyJWT); //Veryfy AccessTokens
// app.use("/autocompletes", require("./routes/api/v-1-0-0/autocompletes"));
app.use("/clients", clientsHandler);

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
