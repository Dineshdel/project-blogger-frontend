import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";
import { URL } from "../url";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post(URL + "/api/auth/register", {
        username,
        email,
        password,
      });
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password);
      setError(false);
      navigate("/login");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex items-center  rounded-lg bg-gray-300 justify-between px-6 md:px-[200px] py-4">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="hover:scale-110"
        >
          <img class="h-10 w-10" src="/img1.png"></img>
          <Link to="/">
            <h1 className="text-lg md:text-xl text-orange-600 hover:text-orange-600 font-extrabold">
              LOG-VERSE
            </h1>
          </Link>
        </div>
        <h3 className="font-extrabold hover:scale-110 hover:text-red-500">
          <Link to="/login">Login</Link>
        </h3>
      </div>
      <div className="w-full flex justify-center items-center h-[72vh]">
        <div
          className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%] shadow-2xl rounded-lg"
          style={{ padding: "10px" }}
        >
          <h1 className="text-xl font-bold text-left">Create an account</h1>
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black rounded-lg outline-0 hover:scale-105"
            type="text"
            placeholder="Enter your username"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black rounded-lg outline-0 hover:scale-105"
            type="text"
            placeholder="Enter your email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black rounded-lg outline-0 hover:scale-105"
            type="password"
            placeholder="Enter your password"
          />
          <button
            onClick={handleRegister}
            className="w-full px-4 py-4 text-lg font-bold text-black bg-blue-400 rounded-lg hover:bg-blue-500 hover:text-black "
          >
            Register
          </button>
          {error && (
            <h3 className="text-red-500 text-sm ">Something went wrong</h3>
          )}
          <div className="flex justify-center items-center space-x-3">
            <p>Already have an account?</p>
            <p className="text-gray-500 font-bold hover:scale-105 hover:text-black hover:text-red-500">
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
