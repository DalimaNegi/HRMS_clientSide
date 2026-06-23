import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  let [signupData, setSignupData] = useState({});
  let [error, setError] = useState({});

  let handleChange = (e) => {
    let { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  let signupForm = {};

  let validateData = (signupData) =>{
    if(!signupForm.name){
      signupForm.name = "Name is required.";
    }
    if(!signupForm.email){
      signupForm.email = "Email is required.";
    }
    if(!signupForm.phone){
      signupForm.phone = "Phone number is required.";
    }
    if(!signupForm.password){
      signupForm.password = "Password is mandatory.";
    }
    if(!signupForm.confirmPassword){
      signupForm.confirmPassword = "Please confirm your password.";
    }

    setError(signupForm);
  };

  let handleClick = () => {
    validateData(signupData);
    console.log(signupData);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-4 bg-yellow-50">
        <div></div>

        <div className="m-auto">
          <div className="card w-100 h-200 border-4 border-red-300 rounded-md shadow-xl mt-3 bg-pink-50">
            <h1 className="card-header text-center font-bold text-xl mt-5">
              Sign Up
            </h1>

            <div className="card-body w-80 h-100 m-auto mt-8">
              <div className="mb-4">
                <label className="font-semibold">Name</label>
                <input
                  className="w-full h-8 border-2 border-blue-400 rounded-md shadow-md px-2"
                  type="text"
                  name="name"
                  autoComplete="off"
                  placeholder=" Enter your name"
                  onChange={handleChange}
                />
                {error && (<p className="text-red-500 mt-1">{error.name}</p>)}
              </div>

              <div className="mb-4">
                <label className="font-semibold">Email</label>
                <input
                  className="w-full h-8 border-2 border-blue-400 rounded-md shadow-md px-2"
                  type="email"
                  name="email"
                  autoComplete="off"
                  placeholder=" Enter your email"
                  onChange={handleChange}
                />
                {error && <p className="text-red-500 mt-1" >{error.email}</p>}
              </div>

              <div className="mb-4">
                <label className="font-semibold">Phone Number</label>
                <input
                  className="w-full h-8 border-2 border-blue-400 rounded-md shadow-md px-2"
                  type="tel"
                  name="phone"
                  autoComplete="off"
                  placeholder=" Enter your phone number"
                  onChange={handleChange}
                />
                {error && <p className="text-red-500 mt-1" >{error.phone}</p>}
              </div>

              <div className="mb-4">
                <label className="font-semibold">Password</label>
                <input
                  className="w-full h-8 border-2 border-blue-400 rounded-md shadow-md px-2"
                  type="password"
                  name="password"
                  autoComplete="off"
                  placeholder=" Enter Password"
                  onChange={handleChange}
                />
                {error && <p className="text-red-500 mt-1" >{error.password}</p>}
              </div>

              <div className="mb-4">
                <label className="font-semibold">Confirm Password</label>
                <input
                  className="w-full h-8 border-2 border-blue-400 rounded-md shadow-md px-2"
                  type="password"
                  name="confirmPassword"
                  placeholder=" Enter Confirm Password"
                  onChange={handleChange}
                />
                {error && <p className="text-red-500 mt-1" >{error.confirmPassword}</p>}
              </div>

              <div className="mb-4">
                <button className="w-full text-white h-8 rounded-md bg-sky-500 hover:bg-sky-700" onClick={handleClick}>
                  Sign Up
                </button>
              </div>

              <div>
                <Link className="text-red-500" to="/login">Already have an account ?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;