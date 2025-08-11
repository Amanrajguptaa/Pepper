import userModel from "../models/user.model.js";
import mongoose from "mongoose";

const addToCart = async (req, res) => {
  try {
    const { userId, itemId, quantity } = req.body;

    const qty = Number(quantity);
    if (!userId || !itemId || !Number.isInteger(qty) || qty <= 0) {
      return res.status(400).json({ message: "Invalid input" });
    }

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    let cartData = userData.cartData || [];

    const itemIndex = cartData.findIndex(
      (item) => item.productId.toString() === itemId
    );

    if (itemIndex > -1) {
      cartData[itemIndex].quantity += qty;
    } else {
      cartData.push({
        productId: new mongoose.Types.ObjectId(itemId),
        quantity: qty,
      });
    }

    userData.cartData = cartData;
    await userData.save();

    res.status(200).json({ success: true, message: "Item added to cart" });
  } catch (error) {
    console.error("Add to Cart Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateCart = async (req, res) => {
  try {
    const { userId, itemId, quantity } = req.body;

    const qty = Number(quantity);
    if (!userId || !itemId || !Number.isInteger(qty) || qty <= 0) {
      return res.status(400).json({ message: "Invalid input" });
    }

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    let cartData = userData.cartData || [];
    const itemIndex = cartData.findIndex(
      (item) => item.productId.toString() === itemId
    );

    if (itemIndex > -1) {
      cartData[itemIndex].quantity = qty;
    } else {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    userData.cartData = cartData;
    await userData.save();

    res.status(200).json({ success: true, message: "Cart updated" });
  } catch (error) {
    console.error("Update Cart Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const getCart = async (req, res) => {
  try {
    const { userId } = req.body;

    const userData = await userModel
      .findById(userId)
      .populate("cartData.productId"); 

    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ cartData: userData.cartData });
  } catch (error) {
    console.error("Get Cart Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteFromCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    let cartData = userData.cartData || [];
    const newCart = cartData.filter(
      (item) => item.productId.toString() !== itemId
    );

    if (cartData.length === newCart.length) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    userData.cartData = newCart;
    await userData.save();

    res.status(200).json({ success: true, message: "Item removed from cart" });
  } catch (error) {
    console.error("Delete From Cart Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { addToCart, updateCart, getCart, deleteFromCart };
