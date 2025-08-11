import productModel from "../models/product.model.js";
import { v2 as cloudinary } from "cloudinary";

const addProduct = async (req, res) => {
  try {
    const { name, description, price, ingredients, nutrients, allergens } =
      req.body;

    const imageFile = req.file;

    if (!imageFile) {
      return res.status(400).json({ message: "Image is required" });
    }

    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    const newProduct = new productModel({
      name:name.trim(),
      description:description.trim(),
      price:Number(price),
      ingredients,
      nutrients,
      allergens,
      image: imageUpload.secure_url,
    });

    await newProduct.save();

    return res.status(200).json({
      message: "Products Added Successfully!",
      newProduct,
    });
  } catch (error) {
    console.error("Error adding product:", error);

    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});

    return res.status(200).json({
      message: "Products fetched successfully!",
      products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);

    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

const editProduct = async (req, res) => {
  try {
    const { productId, name, description, price, ingredients, nutrients, allergens } = req.body;

    const updatedProductData = { name, description, price, ingredients, nutrients, allergens };

    if (req.file) {
      const imageUpload = await cloudinary.uploader.upload(req.file.path, { resource_type: "image" });
      updatedProductData.image = imageUpload.secure_url;
    }

    const updatedProduct = await productModel.findByIdAndUpdate(productId, updatedProductData, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: "Product Not Found" });
    }

    return res.status(200).json({
      message: "Product Edited Successfully!",
      updatedProduct,
    });
  } catch (error) {
    console.error("Error editing product:", error);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};


const deleteProduct = async (req, res) => {
  try {
    const {productId} = req.body;

    const deletedProduct = await productModel.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ success: false, message: "Product Not Found" });
    }


    return res.status(200).json({
      message: "Products Delted Successfully!",
      deletedProduct,
    });
    
  } catch (error) {
    console.error("Error deleting product:", error);

    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

export { addProduct, listProducts,editProduct,deleteProduct };
