import { useState } from "react";
import { Link } from "react-router-dom";

import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

const Register = () => {
const[hide,setHide]=useState(true)
    // getting form data.
    const formHandel=(e)=>{

        e.preventDefault()
        const name=e.target.name.value
        const email=e.target.email.value
        const password=e.target.password.value
        console.log(email,password)

    }




    return (
        <div>
              <div className="hero min-h-[93vh] bg-gray-300 ">
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">



          <form onSubmit={formHandel} className="card-body">

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
              name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              name="email"
                type="email"
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
                type={hide? "password" :"text"}
                placeholder="password"
                className="input input-bordered w-full"
                required
              />
              <span className="absolute top-3 right-3"><button  className="text-2xl" onClick={(e)=>{
                e.preventDefault()
                e.stopPropagation()
                setHide(!hide)
                
              }}>
                {
                    !hide?<AiFillEye></AiFillEye>:<AiFillEyeInvisible></AiFillEyeInvisible>
                }
                </button></span>

             </div>
              <label className="label">
                <p>
                  Have an account? Go and<span> </span>
                  <Link
                    to={"/login"}
                    className=" text-base font-bold text-red-400 link link-hover"
                  >
                     Login.
                  </Link>
                </p>
              </label>
            </div>


            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>

          
        </div>
      </div>
        </div>
    );
};

export default Register;