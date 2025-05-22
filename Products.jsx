//When click on any particular product the product details should be visible on browser and when click on go back button it should be revered.
//The Outlet component is a special component in React Router used in parent routes to render child routes. It acts as a placeholder where the nested child components will be rendered when the URL matches the path for a specific child route.
import { Outlet, useNavigate } from "react-router-dom";
const Products = () => {
  const navigate = useNavigate();

  const navigatehandler = () => {
    navigate("/products/details");
  };
  return (
    <div className="p-8 bg-white transition-all">
      <h1 className="text-2xl font-semibold text-emerald-500 text-center mb-6">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-black text-white rounded-lg p-4 shadow-md flex flex-col items-center space-y-3">
          <img
            src="https://www.popflexactive.com/cdn/shop/files/GoWithTheFlowLongSleeveJumpsuit-BlueHorizon_1174-Edit.jpg?v=1739894149&width=1200"
            alt="Go with the Flow Jumpsuits"
            className="w-38 h-40 object-cover rounded-lg"
          />
          <h2 className="text-lg font-medium m-6 text-center">
            Go With The Flow Long Sleeve Jumpsuit - Blue Horizon
          </h2>
          <p className="text-xl font-bold text-emerald-500">Rs. 8,500.00</p>
          <div className="flex space-x-4 w-fit">
            <button
              onClick={() => alert("Item Added to the cart")}
              className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm px-4 py-1 rounded"
            >
              Add To Cart
            </button>

            <button
              onClick={navigatehandler}
              className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm px-4 py-1 rounded"
            >
              See Product Details
            </button>
          </div>
        </div>
      </div>
      {/* we used outlet to show the chile route which was created inside the parent rout which means when we click on see product details 
in same page the product details will be shown  but the route will be products/details for now we are showing product details in diff page */}
      {/* <Outlet /> */}
    </div>
  );
};

export default Products;
