import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  let navigate = useNavigate();

  let [loginData, setLoginData] = useState({});
  let [error, setError] = useState({});

  let handleChange = (e) => {
    let { name, value } = e.target; //we are destructuring name and value which are in target.
    setLoginData({ ...loginData, [name]: value }); //value is in object format -> to add existing value.
  };

  let handleValidate = (loginData) => {
    let formError = {};

    if (!loginData.email) {
      formError.email = "Email is required.";
    }

    if (!loginData.password) {
      formError.password = "Password is required.";
    } 
    // else if (loginData.password.length < 8) {
    //   //The else if ensures that .length is checked only after confirming that the field is not empty.
    //   formError.password = "Minimum 8 characters required.";
    // }

    if (!loginData.confirmPassword) {
      formError.confirmPassword ="Confirmation of Password is required. It cannot be empty.";
    } 
    // else if (loginData.conPassword.length < 8) {
    //   formError.conPassword = "Minimum 8 characters required.";
    // }

    if (Object.keys(formError).length === 0) {
      axios                                                    //promise-based http client
        .post("http://localhost:5000/api/login", loginData)
        .then((res) => {
          let { success, message, token } = res.data;
          if (success) {
            alert(message);
            localStorage.getItem("auth_token", token);
            navigate("/panel");
          }
        })
        .catch((err) => {
          let { success, message, token } = err.response.data;
          if (success === false) {
            alert(message);
          }
        });
    }

    setError(formError);
  };

  let handleClick = () => {
    //alert("Login Successful");
    handleValidate(loginData);
    console.log(loginData);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-4 bg-yellow-50">
        <div></div>

        <div className="m-auto">
          <div className="card w-100 h-150 border-4 border-red-300 rounded-md shadow-xl mt-3 bg-pink-50 ">
            <h1 className="card-header text-center font-bold text-xl mt-5 font-mono">
              Login
            </h1>

            <div className="card-body w-80 h-100 m-auto mt-8">
              <div className="mb-4">
                <label className="font-semibold">Email</label>
                <input
                  className="w-full h-8 border-2 border-blue-400 rounded-md shadow-md"
                  type="email"
                  autoComplete="off"
                  placeholder=" Enter your email"
                  onChange={handleChange}
                  name="email"
                />
                {error && <p className="text-red-500 mt-1">{error.email}</p>}
              </div>

              <div className="mb-4">
                <label className="font-semibold">Password</label>
                <input
                  className="w-full h-8 border-2 border-blue-400 rounded-md shadow-md"
                  type="password"
                  autoComplete="off"
                  placeholder=" Enter Password"
                  onChange={handleChange}
                  name="password"
                />
                {error && <p className="text-red-500 mt-1">{error.password}</p>}
              </div>

              <div className="mb-4">
                <label className="font-semibold">Confirm Password</label>
                <input
                  className="w-full h-8 border-2 border-blue-400 rounded-md shadow-md"
                  type="password"
                  placeholder=" Enter Confirm Password"
                  onChange={handleChange}
                  name="confirmPassword"
                />
                {error && (
                  <p className="text-red-500 mt-1">{error.confirmPassword}</p>
                )}
              </div>

              <div className="mb-4">
                <button
                  className="w-full text-white h-8 rounded-xl bg-sky-500 hover:bg-sky-700"
                  onClick={handleClick}
                >
                  Login
                </button>
              </div>
              <div>
                <Link className="text-red-500" to="/signup">
                  Don't have an account ?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
