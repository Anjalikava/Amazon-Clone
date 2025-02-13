import { useLocation } from "react-router-dom";

const HomeBannerClickProducts = () => {
    const location = useLocation();
    const selectedProduct = location.state?.product || null;

    if (!selectedProduct) {
        return <p className="text-center text-red-500">No product data available.</p>;
    }

    return (
        <div className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-lg shadow mt-10">
            {/* Product Title */}
            <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">{selectedProduct.itemTitle}</h1>

            {/* Image Grid Section */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {selectedProduct.imgs.map((img, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg shadow flex flex-col items-center">
                        <img 
                            src={img.url} 
                            alt={img.name} 
                            className="object-contain w-40 h-40 rounded-lg shadow" 
                        />
                        <p className="text-sm text-gray-700 mt-2 font-bold">{img.name}</p>
                        <p className="text-green-600 text-sm font-bold">{img.Price || "$30"}</p>
                        <div className="mt-2 flex space-x-2">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
                                Add to Cart
                            </button>
                            <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition">
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeBannerClickProducts;
