import { Button } from "bootstrap";
import React from "react";
import Navbar from "./features/navbar";
import { Link } from "react-router-dom";

function Login_from() {
  return (
    <React.Fragment>
      <Navbar />
      <h1>Login </h1>
      <Link to="/home">
        <button>Home</button>
      </Link>
    </React.Fragment>
  );
}

export default Login_from;
