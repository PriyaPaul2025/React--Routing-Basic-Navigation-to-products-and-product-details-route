import { useState } from "react";

const Register = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center  p-20">
      <div className="bg-black text-white shadow-lg rounded-lg p-10 w-full max-w-md">
        <div className="flex justify-between mb-5">
          <button
            onClick={() => setIsSignUp(true)}
            className={`w-1/2 py-2 font-semibold ${
              isSignUp ? "text-emerald-600 border-b-2 border-emerald-600" : ""
            }`}
          >
            Sign Up
          </button>
          <button
            onClick={() => setIsSignUp(false)}
            className={`w-1/2 py-2 font-semibold ${
              !isSignUp ? "text-emerald-600 border-b-2 border-emerald-600" : ""
            }`}
          >
            Sign In
          </button>
        </div>

        {isSignUp ? (
          <form>
            <input type="text" placeholder="Username" className="input" />
            <br /> <br />
            <input
              type="email"
              placeholder="Email"
              className="input"
            /> <br /> <br />
            <input type="password" placeholder="Password" className="input" />
            <br /> <br />
            <button className="bg-emerald-600 text-white w-full py-2 mt-4 rounded hover:bg-emerald-700 transition">
              Sign Up
            </button>
          </form>
        ) : (
          <form>
            <input type="email" placeholder="Email" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <button className="bg-emerald-600 text-white w-full py-2 mt-4 rounded hover:bg-emerald-700 transition">
              Sign In
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
