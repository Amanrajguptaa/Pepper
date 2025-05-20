import Order from "../models/orderModel.js";
import Product from "../models/productModel.js"; 

export const placeorder = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized - No token provided",
      });
    }

    const { user } = req;
    const {
      products, 
      shippingAddress,
      paymentMethod
    } = req.body;

    if (!products || products.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No products provided",
      });
    }

    if (!shippingAddress) {
      return res.status(400).json({
        success: false,
        message: "Shipping address is required",
      });
    }

    if (!paymentMethod) {
      return res.status(400).json({
        success: false,
        message: "Payment method is required",
      });
    }

    let totalAmount = 0;

    for (const item of products) {
      const product = await Product.findById(item.productId);

      if (!product) {
        return res.status(404).json({
          success: false,
          message: `Product not found: ${item.productId}`,
        });
      }

      totalAmount += product.price * item.quantity;
    }

    const order = new Order({
      userId: user._id,
      products,
      shippingAddress,
      paymentMethod,
      totalAmount
    });

    await order.save();

    console.log("Order placed successfully");
    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order
    });

  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
