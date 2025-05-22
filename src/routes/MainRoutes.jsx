import Home from "../pages/Home";
import Products from "../pages/Products";
import Services from "../pages/Services";
import About from "../pages/About";
import Register from "../components/Register";
import ProductDetails from "../pages/ProductDetails";
import { Route, Routes } from "react-router-dom";
const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/details" element={<ProductDetails />} />
        {/* Created productdetails route seperate not inside the parent products route to show details in diff page, route */}
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
