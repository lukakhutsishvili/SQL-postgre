import pgk from "pg";

const { Pool } = pgk;

const pool = new Pool({
  host: "dpg-cnsl6l0l5elc73fl817g-a",
  port: 5432,
  database: "parking_app_4h4o",
  user: "parking_app_4h4o_user",
  password: "BiZ4wcZ9yCfeH2dmr76QjT0AAJ7air9E",
});

export const createTable = async () => {
  return await pool.query(
    "CREATE TABLE IF NOT EXISTS customer(id SERIAL PRIMARY KEY, name TEXT, password TEXT)"
  );
};

export default pool;
