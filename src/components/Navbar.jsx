import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useContext, useState } from "react";
import Menu from "./Menu";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const [prompt, setPrompt] = useState("");
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const path = useLocation().pathname;

  // console.log(prompt)

  const showMenu = () => {
    setMenu(!menu);
  };

  const { user } = useContext(UserContext);
  // const user = false;

  return (
    <div className="flex items-center bg-gray-300 justify-between px-20 md:px-[200px] py-4">
      <div>
        <Link to="/">
          <h1 className="text-lg md:text-xl hover:scale-110 text-red-500 hover:text-red-600 font-extrabold">
            {/* <img src="/img1.png" style={{ width: "50px", height: "50px" }} /> */}
            BLOG-VERSE
          </h1>
        </Link>
      </div>
      {path === "/" && (
        <div className="flex justify-center  items-center ">
          <input
            onKeyDown={(e) =>
              navigate(prompt ? "?search=" + prompt : navigate("/"))
            }
            onChange={(e) => setPrompt(e.target.value)}
            className="outline-none italic bg-gray-300"
            placeholder="Search a post"
            type="text"
          />
          <span className="hover:scale-110" style={{ cursor: "pointer" }}>
            <FaSearch />
          </span>
          <p
            onClick={() =>
              navigate(prompt ? "?search=" + prompt : navigate("/"))
            }
            className="cursor-pointer "
          ></p>
        </div>
      )}

      <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
        {user ? (
          <h3 className="font-bold hover:scale-110">
            <Link to="/write">Write</Link>
          </h3>
        ) : (
          <h3 className="font-bold hover:scale-110">
            <Link to="/login">Login</Link>
          </h3>
        )}
        {user ? (
          <div onClick={showMenu}>
            <p className="cursor-pointer hover:scale-110 relative">
              <FaBars />
            </p>
            {menu && <Menu />}
          </div>
        ) : (
          <h3 className="font-bold hover:scale-110">
            <Link to="/register">Register</Link>
          </h3>
        )}
      </div>
      <div onClick={showMenu} className="md:hidden text-lg ">
        <p className="cursor-pointer relative ">
          <FaBars />
        </p>
        {menu && <Menu />}
      </div>
    </div>
  );
};

export default Navbar;
