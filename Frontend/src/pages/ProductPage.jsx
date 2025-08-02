import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/store";
import RelatedProducts from "../components/RelatedProducts";

const ProductPage = () => {
  const { id } = useParams();
  const { menuData } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [relatedProduct, setRelatedProduct] = useState([]);

  const relatedProductDetails = (currentProduct) => {
    const relatedProductData = menuData
      .filter(
        (item) =>
          item.category === currentProduct.category &&
          item.id !== Number(id)
      )
      .slice(0, 3);
    setRelatedProduct(relatedProductData);
  };

  useEffect(() => {
    const product = menuData.find((item) => item.id === Number(id));
    setProductData(product);
  }, [id, menuData]);

  useEffect(() => {
    if (productData) {
      relatedProductDetails(productData);
    }
  }, [productData, menuData]);

  if (!productData) {
    return (
      <div className="flex justify-center items-center h-screen text-lg font-semibold text-gray-600">
        Loading product details...
      </div>
    );
  }

  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-0 py-10 text-gray-800 max-w-6xl mx-auto">
      {/* Product Container */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
        {/* Product Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="overflow-hidden rounded-xl w-full max-w-md">
            <img
              src={productData.image}
              alt={productData.name}
              className="w-full h-auto md:h-[480px] object-cover transition-transform duration-500 ease-in-out hover:scale-105 pointer-events-none"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-2/3 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 text-gray-900 leading-snug">
            {productData.name}
          </h1>
          <p className="text-base sm:text-lg text-gray-500 mb-5">{productData.category}</p>

          <p className="text-2xl sm:text-3xl font-bold mb-6 text-[#FF003C]">
            {productData.price}
          </p>

    <div className="flex flex-col md:flex-row w-full justify-start items-start md:gap-20">
          {/* Ingredients */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Ingredients:</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base">
              {productData.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Nutritional Info */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-2">Nutritional Info:</h2>
            <div className="grid grid-cols-1 gap-y-2 gap-x-4  p-4 rounded-lg text-gray-700">
              {Object.entries(productData.nutritionalInfo).map(([key, value]) => (
                <div key={key} className="flex justify-between text-sm sm:text-base font-semibold">
                  <span className="font-medium mr-2">{key}:</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>

          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <button className="w-full sm:w-auto px-6 py-3 bg-[#FF003C] hover:bg-[#e60036] text-white text-lg rounded-full shadow-lg transition-transform transform hover:scale-105">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProduct.length > 0 && <RelatedProducts products={relatedProduct} />}
    </section>
  );
};

export default ProductPage;
