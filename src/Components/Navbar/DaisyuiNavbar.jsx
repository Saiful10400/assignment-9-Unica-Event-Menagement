import { NavLink } from "react-router-dom";
import logo from "../../../public/images/logo.png";
import profile from "../../../public/images/user.png";
import { useContext } from "react";
import { datacontext } from "../DataProvider";


const DaisyuiNavbar = () => {
  const { user, Logout } = useContext(datacontext);

  const list = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
      <li>
        <NavLink to={"/affiliate"}>Affiliate</NavLink>
      </li>
    </>
  );
console.log(user)
  return (
    <div className="z-10">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {list}
            </ul>
          </div>
          <img src={logo} className="w-[98px]" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{list}</ul>
        </div>

        <div className="navbar-end ">
          <div className="flex flex-col items-center">
            <div className="flex">
              {user ? (
                <button onClick={Logout} className="btn-primary btn mr-4">
                  Logout
                </button>
              ) : (
                ""
              )}
              <div className="lg:w-14 w-10 h-10 lg:h-14  rounded-full object-contain">
                <img
                  className="w-full h-full bg-gray-200 rounded-full "
                  src={user?.photoURL ? user.photoURL : profile}
                  alt=""
                />
              </div>
            </div>

            <p className="font-bold">{user?.displayName ? user?.displayName : user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaisyuiNavbar;
