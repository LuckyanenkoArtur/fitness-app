import { Pool } from "pg";

const pool: Pool = new Pool({
  user: "postgres",
  password: "#15Gjcn3128Uh.#",
  host: "localhost",
  port: 5432,
  database: "fit_today",
});

// Define the type for your query function
type QueryFunction = (text: string, params?: any[]) => Promise<any>;

// Export the query function
const query: QueryFunction = (text, params) => pool.query(text, params);

export default {
  query,
};
