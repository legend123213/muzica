import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../slicers/auth_slice";
import { signOut } from "firebase/auth";
import { auth } from "../api/firebase";

const Signout = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    dispatch(clearUser());
    nav("/");
    try {
      signOut(auth);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return <>signed out</>;
};

export default Signout;
