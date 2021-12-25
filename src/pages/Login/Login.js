import React, { useState, useContext } from "react";
import { useInput } from "hooks/useInput";
import { login } from "services/auth";
import { useNavigate } from "react-router-dom";
import AuthContext from "context/AuthContext";

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
    <>
      <form onSubmit={handleSubmit}>
        Email: <input placeholder="Enter your email" {...email}></input>
        Password:{" "}
        <input placeholder="Enter your password" {...password}></input>
        <button>Login</button>
      </form>

      {error && <div>Wrong credentials</div>}
    </>
  );
};

export default Login;
