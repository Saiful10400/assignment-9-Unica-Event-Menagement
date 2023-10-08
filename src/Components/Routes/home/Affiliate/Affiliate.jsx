import React from "react";
import swal from 'sweetalert';
const Affiliate = () => {
    const formHandle=(e)=>{
        e.preventDefault()
        swal({
            title: "Good job!",
            text: "You sebmitted Successfully.",
            icon: "success",
            button: "Ok",
          });

    }
  return (
    <div className="lg:w-[1400px] mx-auto">
      <div className="hero min-h-screen bg-base-200">
       
        <div className="card flex-shrink-0 w-full max-w-6xl shadow-2xl bg-base-100">
            <h1 className="text-center text-4xl mt-4">Register a new affiliate account</h1>
          <form onSubmit={formHandle} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input type="text" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input type="text" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Account Email</span>
              </label>
              <input type="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Payment Email</span>
              </label>
              <input type="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Website URL</span>
              </label>
              <input type="text" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
