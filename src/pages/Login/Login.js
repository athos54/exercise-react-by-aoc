import React, { useState, useContext } from "react";
import { useInput } from "hooks/useInput";
import { login } from "services/auth";
import { useNavigate } from "react-router-dom";
import AuthContext from "context/AuthContext";
import "./Login.css";

const Login = (props) => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const email = useInput("");
  const password = useInput("");
  const [error, setError] = useState(false);
  // const email = useInput('eve.holt@reqres.in')
  // const password = useInput('cityslicka')

  const handleSubmit = (e) => {
    setError(false);
    e.preventDefault();
    login(email.value, password.value)
      .then((res) => {
        context.auth.login(res.token);
        navigate("/home");
      })
      .catch((err) => {
        setError(true);
      });
  };

  return (
    <div className="login-container">
      <div className="row">
        <div className="col d-none d-md-block login-background"></div>

        <div className="col">
          <div className="login-inputs row">
            <div className="mb-5">
              <img src="/logoipsum-logo-49.svg" alt="logo" loading="lazy" />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label"
                >
                  Email
                </label>
                <div className="">
                  <input
                    id="staticEmail"
                    className="form-control mb-3"
                    placeholder="Enter your email"
                    {...email}
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="inputPassword"
                  className="col-sm-2 col-form-label"
                >
                  Password
                </label>
                <div>
                  <input
                    id="inputPassword"
                    type="password"
                    className="form-control mb-5"
                    placeholder="Enter your password"
                    {...password}
                  ></input>
                </div>
                <div className="login-buttons">
                  <button className="btn btn-primary w-100">Login</button>
                </div>
              </div>
            </form>
          </div>
          {error && (
            <div className="row text-center mt-5">
              <div className="col text-danger">Wrong credentials</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
