import express from "express";
import {
  addCustomers,
  getAllCustomers,
} from "../controllers/customer-controller.js";

const customerRouter = express.Router();

customerRouter.get("/customers", getAllCustomers);
customerRouter.post("/addCustomers", addCustomers);

export default customerRouter;
