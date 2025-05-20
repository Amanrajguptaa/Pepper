import express from "express";
import authUser from "../middlewares/auth.js";
import { placeorder } from "../controllers/order.controller.js";

const orderRouter = express.Router();

orderRouter.post('/place-order',authUser, placeorder)
export default orderRouter;