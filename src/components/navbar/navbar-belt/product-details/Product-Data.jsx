import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Star } from "lucide-react";
import Footer from "../../../../modules/footer/Footer";
import categories from "./Categories";

const AmazonProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [wishlist, setWishlist] = useState({});
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryFromURL = params.get("category");

    if (categoryFromURL) {
      setSelectedCategory(categoryFromURL);
    }
  }, [location]);

  const toggleWishlist = (index) => {
    setWishlist((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <>
      <div className="container mx-auto p-4">
        {selectedCategory && categories[selectedCategory] ? (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2 capitalize">{selectedCategory.replace("-", " ")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories[selectedCategory].map((product, index) => (
                <div key={index} className="border p-4 rounded-lg shadow relative">
                  <button 
                    className="absolute top-2 right-2 text-2xl focus:outline-none"
                    onClick={() => toggleWishlist(index)}
                  >
                    {wishlist[index] ? "❤️" : "🤍"}
                  </button>
                  <div className="w-64 h-64 flex justify-center items-center overflow-hidden">
                    <img src={product.images[0]} alt={product.title} className="object-contain w-full h-full rounded-lg" />
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
                  <p className="text-green-600 font-bold">{product.price}</p>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                  <div className="flex items-center gap-1 text-yellow-500 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} fill={i < product.rating ? "#FFD700" : "#E5E7EB"} />
                    ))}
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">Add to Cart</button>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">Buy Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Please select a category to view products.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default AmazonProductPage;