import React, { useState } from "react";
import axios from "axios";
// import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  // const { currentUser } = useContext(AuthContext);

  // console.log(currentUser);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/login", inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}> LOGIN</button>
        {err && <p>{err}</p>}
        <span>
          You don't have an account <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
