import { useNavigate } from "react-router-dom";
const ProductDetails = () => {
  const navigate = useNavigate();
  return (
    <div className=" p-6 max-w-xl mx-auto m-20 bg-white rounded-lg shadow-lg text-center justify-center">
      <h1 className="text-xl font-semibold text-emerald-600 mb-4">
        Product Details
      </h1>
      <p className="text-black mb-2">Product Details</p>
      <p className="text-black mb-2">Product Details</p>
      <p className="text-black mb-2">Product Details</p>
      <br />
      <button
        onClick={() => navigate(-1)}
        className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded"
      >
        Go Back
      </button>
    </div>
  );
};

export default ProductDetails;
