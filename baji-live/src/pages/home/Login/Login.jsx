import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaChevronLeft, FaTimes, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // State to store email input value
  const [password, setPassword] = useState(""); // State to store password input value
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  // Function to go back to the previous route
  const handleGoBack = () => {
    navigate(-1); // This takes the user to the previous route in history
  };

  return (
    <div className="bg-black h-screen">
      <div className="relative bg-slate-600 px-3 py-3 text-white text-center">
        <FaChevronLeft
          className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2 cursor-pointer"
          onClick={handleGoBack}
        />
        <p>লগ ইন</p>
      </div>
      <img
        src="https://img.b112j.com/bj/h5/assets/images/sponsor/bn-sponsor.jpg?v=1727170388190&source=mcdsrc"
        alt=""
      />
      <div className="w-full p-3 text-[#fdfdfd]">
        <form action="">
          {/* Email Input */}
          <div className="relative flex w-full items-center gap-1.5 px-4 py-2 rounded bg-[#292929] mb-4">
            <Label className="text-base w-1/3" htmlFor="email">
              ব্যবহারকারীর নাম
            </Label>
            <div className="w-2/3 h-full relative">
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update the state when input changes
                placeholder="ব্যবহারকারীর নাম"
                className="pl-5 pr-10 rounded focus:outline-none text-[#14805e] border-none bg-transparent w-full"
              />
              {/* Cross (clear) button */}
              {email && (
                <div
                  className="bg-[#14805e] p-1 absolute right-2 top-1/2 transform -translate-y-1/2 text-white cursor-pointer rounded-full"
                  onClick={() => setEmail("")}
                >
                  <FaTimes />
                </div>
              )}
            </div>
          </div>

          {/* Password Input */}
          <div className="relative flex w-full items-center gap-1.5 px-4 py-2 rounded bg-[#292929]">
            <Label className="text-base w-1/3" htmlFor="password">
              পাসওয়ার্ড
            </Label>
            <div className="w-2/3 h-full relative">
              <Input
                type={showPassword ? "text" : "password"} // Toggle password visibility
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update the state when input changes
                placeholder="পাসওয়ার্ড"
                className="pl-5 pr-10 rounded focus:outline-none text-[#14805e] border-none bg-transparent w-full"
              />
              {/* Cross (clear) button */}
              {password && (
                <div
                  className="bg-[#14805e] p-1 absolute right-12 top-1/2 transform -translate-y-1/2 text-white cursor-pointer rounded-full"
                  onClick={() => setPassword("")}
                >
                  <FaTimes />
                </div>
              )}
              {/* Show/Hide Password button */}
              <div
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#fff] text-2xl cursor-pointer"
                onClick={() => setShowPassword(!showPassword)} // Toggle show/hide password
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end my-2">
            {" "}
            <p className="border inline-block px-3 py-0.5 text-[#14805e] border-[#14805e]">
              পাসওয়ার্ড ভুলে গেছেন?
            </p>
          </div>
          <Button type="submit" className="bg-[#14805e] w-full text-base py-6">
            লগ ইন
          </Button>
          <p className="px-3 py-1.5 text-[#fff] text-center">
            একাউন্ট নেই?{" "}
            <Link to="/register">
              <span className="text-[#ffdf1a] underline"> সাইন আপ</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
