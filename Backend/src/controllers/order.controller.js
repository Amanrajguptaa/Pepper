import orderModel from '../models/order.model.js';
import userModel from '../models/user.model.js';
import mongoose from 'mongoose';

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount,paymentMethod, address } = req.body;

    if (!userId || !Array.isArray(items) || items.length === 0 || !amount || !address) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod,
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: [] });

    res.status(200).json({ success: true, message: "Order placed successfully" });
  } catch (error) {
    console.error("Place Order Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({})
      .populate("userId", "name email")
      .populate("items.productId", "name price image");

    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.error("All Orders Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;

    const orders = await orderModel.find({ userId })
      .populate("items.productId", "name price image");

    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.error("User Orders Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    if (!orderId || !status) {
      return res.status(400).json({ success: false, message: "Order ID and status are required" });
    }

    await orderModel.findByIdAndUpdate(orderId, { status }, { new: true });

    res.status(200).json({ success: true, message: "Order status updated successfully" });
  } catch (error) {
    console.error("Update Order Status Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { placeOrder, allOrders, userOrders, updateOrderStatus };
