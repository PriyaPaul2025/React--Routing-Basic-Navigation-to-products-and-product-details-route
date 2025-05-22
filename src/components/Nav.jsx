import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="p-5 justify-between item-center flex  bg-black text-white">
      <div className="text-3xl font-serif font-semibold text-emerald-600 tracking-wide  ml-12">
        Pri<span className="italic font-light">Clothings</span>
      </div>
      <div className="flex gap-20 text-lg mx-auto">
        <NavLink
          to="/"
          className={(e) => (e.isActive ? "text-emerald-500	font-bold" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={(e) => (e.isActive ? "text-emerald-500	 font-bold" : "")}
        >
          Products
        </NavLink>
        <NavLink
          to="/services"
          className={(e) => (e.isActive ? "text-emerald-500	font-bold" : "")}
        >
          Services
        </NavLink>
        <NavLink
          to="/about"
          className={(e) => (e.isActive ? "text-emerald-500	font-bold" : "")}
        >
          About
        </NavLink>
      </div>
      <div>
        <button className="bg-emerald-600 text-white px-10 py-2 rounded-full hover:bg-emerald-700 transition mr-12">
          <NavLink
            to="/register"
            className={(e) => (e.isActive ? "font-bold" : "")}
          >
            Register
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Nav;
