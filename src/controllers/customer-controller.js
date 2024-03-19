import pool from "../config/sql.js";

export const getAllCustomers = async (_, res) => {
  try {
    const resultQuery = await pool.query("SELECT * FROM customer");
    const rows = resultQuery.rows;
    return res.status(200).json(rows);
  } catch (error) {
    return res.status(401).json(error);
  }
};

export const addCustomers = async (req, res) => {
  try {
    const { name, mail, cartype, password } = req.body;
    console.log(req.body);
    const resultQuery = await pool.query(
      "INSERT INTO customer(name, mail, cartype, password) VALUES($1, $2, $3, $4)",
      [name, mail, cartype, password]
    );
    const rows = resultQuery.rows;
    return res.status(201).json(rows);
  } catch (error) {
    console.log(error);
  }
};
