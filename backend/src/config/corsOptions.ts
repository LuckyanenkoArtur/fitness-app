import { CorsOptions } from "cors";

const allowOrigins: string[] = [
  "http://localhost",
  "http://localhost:80",
  "http://localhost:5173",
  "http://localhost:5000",
  "https://localhost",
];

const corsOptions: CorsOptions = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void
  ) => {
    // Convert origin to string if it's not undefined
    const originString = origin ? origin : "";
    if (allowOrigins.indexOf(originString) !== -1 || !originString) {
      callback(null, true);
    } else {
      callback(new Error("Not Allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
  credentials: true,
};

export { corsOptions, allowOrigins };
