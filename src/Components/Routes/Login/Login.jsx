import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import { datacontext } from "../../DataProvider";


import swal from 'sweetalert'

const Login = () => {
  const [fail, setfail] = useState("");
  const data = useContext(datacontext);

  const { googleLogin, emailLogin } = data;

  // cotext api data.

  const [hide, setHide] = useState(true);

  const formHandle = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    emailLogin(email, password)
      .then(() => swal("Login successfull."))
     
      .catch((Error) => setfail(Error.message));
    };
    console.log(fail);
  return (
    <div>
      <div className="hero min-h-[92vh] bg-gray-300 ">
        <div className="card rounded-none lg:rounded-2xl flex-shrink-0 w-full lg:h-auto h-full max-w-lg shadow-2xl bg-base-100 pb-7">
          <form onSubmit={formHandle} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={hide ? "password" : "text"}
                  placeholder="password"
                  className="input input-bordered w-full"
                  required
                />
                <span className="absolute top-3 right-3">
                  <button
                    className="text-2xl"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setHide(!hide);
                    }}
                  >
                    {!hide ? (
                      <AiFillEye></AiFillEye>
                    ) : (
                      <AiFillEyeInvisible></AiFillEyeInvisible>
                    )}
                  </button>
                </span>
              </div>
              <p className="text-red-500 text-lg mt-2 mb-5 font-bold">{fail}</p>
              <label className="label">
                <p>
                  New user? Go and <span> </span>
                  <Link
                    to={"/register"}
                    className=" text-base font-bold text-red-400 link link-hover"
                  >
                    Register.
                  </Link>
                </p>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center mb-4">or</p>
          <button
            onClick={googleLogin}
            className="bg-gray-200 w-[96%]  hover:text-gray-500 mx-auto rounded-lg flex justify-center items-center text-2xl gap-4 py-3"
          >
            <BsGoogle></BsGoogle>
            <span className="font-normal">Continue with google</span>
          </button>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
