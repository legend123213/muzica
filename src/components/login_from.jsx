import React, { useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "@emotion/styled";
import { auth } from "../api/firebase";
import Erro from "./features/error";
import { setUser } from "../slicers/auth_slice";
import Home from "./home";
import { Link, useNavigate } from "react-router-dom";

const MainLogin = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: whitesmoke;
`;
const EmailLable = styled.p`
  position: relative;
  margin-top: 8px;
  font-size: 20px;
  font-weight: bold;
  color: white;
`;
const InputText = styled.input`
  position: relative;
  height: 40px;
  width: 95%;
  padding: 15px 15px;
  border: 3px solid rgb(37, 87, 87);

  outline: none;
  border-radius: 8px;
  font-size: 1rem;
  margin-top: 8px;
  margin-bottom: 10px;
  background-color: #187098;
  color: white;
  transition: transform 0.3s ease-in-out;
  &:focus {
    border: 3px solid #2f302f;
    transform: scale(1.01);
  }
`;
const SectionAll = styled.section`
  box-sizing: content-box;
  position: relative;
  width: 100%;
  max-width: 700px;
  background-color: #2f302f;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 0 15px rgba(3, 2, 5, 6);
`;
const HeadingLog = styled.h1`
  text-align: center;
`;
const BtnDiv = styled.div`
  padding: 0px 0px 10px 40%;
`;
const BtnLog = styled.button`
  width: 25%;
  height: 55px;
  background-color: #2da4db;
  font-size: 1rem;
  color: #fff;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 30px;
  &:hover {
    font-weight: bold;
    background-color: #187098;
  }
`;
const SignIn = styled.p``;
const Signup = styled.div`
  height: 15px;
  padding-bottom: 10px;
  padding-left: 200px;
`;
function Login_from() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();
  const userind = useSelector((state) => state.auth.user);
  useEffect(() => {}, [auth]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser(user));

      console.log("Logged in!");
      nav("/");
    } catch (error) {
      console.error(error.message);
      return <Erro />;
    }
  };

  return (
    <React.Fragment>
      <MainLogin>
        <SectionAll>
          <HeadingLog>Log In</HeadingLog>
          <form onSubmit={handleLogin}>
            <EmailLable>Enter Your Email</EmailLable>
            <InputText
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <EmailLable>Password</EmailLable>
            <InputText
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <BtnDiv>
              {/* <Link to="/home"> */}
              <BtnLog type="submit">Log In</BtnLog>
              {/* </Link> */}
            </BtnDiv>
          </form>

          <Signup>
            <SignIn>
              if you don't have an account
              <Link to="/signup">signup</Link>
            </SignIn>
          </Signup>
        </SectionAll>
      </MainLogin>
    </React.Fragment>
  );
}

export default Login_from;
