import productModel from "../models/product.model";

export const getItem = async (req, res) => {
    let { item } = req.params;

    try {
        const product = await productModel.findOne({ item });

        if (!product) {
            return res.status(504).json({ success: false, message: "Missing product!" });
        }

        res.render("menu.ejs", { products: product });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
};
