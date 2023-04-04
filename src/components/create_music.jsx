import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { add_music_request, ToBeEdited } from "../slicers/music_slice";
import Navbar from "./features/navbar";
import styled from "@emotion/styled";
import { redirect, useNavigate } from "react-router-dom";

const Num = styled.input`
  position: relative;
  height: 40px;
  width: 85%;
  padding: 8px 15px;
  border: 3px solid greenyellow;

  outline: none;
  border-radius: 8px;
  font-size: 1rem;
  margin-top: 8px;
  background-color: #6b728e;
  color: white;
  transition: transform 0.3s ease-in-out;
  &:focus {
    border: 3px solid greenyellow;
    transform: scale(1.01);
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;
const AllBody = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px; ;
`;
const TopHeading = styled.div`
  margin-bottom: auto;
  border-bottom: 1px solid black;
`;
const NameLabel = styled.p`
  position: relative;
  margin-top: 8px;
  font-size: 20px;
  font-weight: bold;
  color: white;
`;
const InputBox = styled.input`
  position: relative;
  height: 40px;
  width: 85%;
  padding: 8px 15px;
  border: 3px solid rgb(37, 87, 87);

  outline: none;
  border-radius: 8px;
  font-size: 1rem;
  margin-top: 8px;
  background-color: #187098;
  color: white;
  transition: transform 0.3s ease-in-out;
  &:focus {
    border: 3px solid #2f302f;
    transform: scale(1.01);
  }
`;
const SelectionCSS = styled.section`
  box-sizing: content-box;
  position: relative;
  width: 100%;
  max-width: 800px;
  background-color: #2f302f;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 0 15px rgba(3, 2, 5, 6);
`;
const MusicLable = styled.div`
  display: inline-block;
  margin-right: 80px;
`;
const Form = styled.form`
  margin: 20px;
  width: 100%;
`;

const Btndiv = styled.div`
  display: flex;
  align-items: center;
`;
const Inline = styled.div`
  display: inline-block;
`;
const Btn = styled.button`
  width: 20%;
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
function Create_music(Props) {
  const nav = useNavigate();
  const { edit } = Props;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const btn1 = useState(edit ? "EDIT" : "ADD");
  const [newMusic, setnewMusic] = useState({
    name: "",
    title: "",
    length: "",
    album: "",
    genre: "",
    id: "",
    userid: user,
    btnn: "ADD",
  });
  useEffect(() => {
    setnewMusic({
      name: edit ? edit.name : "",
      title: edit ? edit.title : "",
      length: edit ? edit.length : "",
      album: edit ? edit.album : "",
      genre: edit ? edit.genre : "",
      id: edit ? edit.id : "",
      user_id: user.uid,
      btnn: edit ? edit.btn : "ADD",
    });
  }, [edit]);
  const [showSuccesfull, setSuccfull] = useState(false);
  const add_music = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const nw = { ...newMusic, [name]: value };
    console.log(newMusic);
    if (newMusic.btnn === "ADD") {
      delete nw.id;

      setnewMusic({ ...nw });
    } else {
      delete nw.btnn;
      setnewMusic({ ...nw, ["id"]: edit ? edit.id : "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMusic.btnn === "ADD") {
      const remove = { ...newMusic };
      delete remove.btnn;
      setnewMusic();
      dispatch(add_music_request(remove));
      setSuccfull(true);
      console.log("done");
      nav("/");
    } else {
      dispatch(ToBeEdited(newMusic));
      setSuccfull(true);

      nav("/");
    }
  };

  return (
    <React.Fragment>
      <TopHeading>
        <h1>Submit Your Music</h1>
        <p>Enter your details for evolution </p>
      </TopHeading>
      <AllBody>
        <SelectionCSS>
          <Form onSubmit={handleSubmit}>
            <Inline>
              <MusicLable>
                <NameLabel>Music name</NameLabel>
                <InputBox
                  type="text"
                  name="title"
                  required
                  value={newMusic.title}
                  onChange={add_music}
                />
              </MusicLable>

              <Inline>
                <NameLabel>Album name</NameLabel>
                <InputBox
                  type="text"
                  name="album"
                  required
                  value={newMusic.album}
                  onChange={add_music}
                />
              </Inline>
            </Inline>
            <br />
            <NameLabel>Artist name</NameLabel>
            <InputBox
              type="text"
              name="name"
              required
              value={newMusic.name}
              onChange={add_music}
            />
            <br />
            <NameLabel> Length of music:</NameLabel>
            <InputBox
              type="text"
              name="length"
              required
              value={newMusic.length}
              onChange={add_music}
            />
            <br />
            <NameLabel>Type of genre</NameLabel>
            <InputBox
              type="text"
              name="genre"
              required
              value={newMusic.genre}
              onChange={add_music}
            />
            <Btndiv>
              <Btn>{btn1}</Btn>
            </Btndiv>
          </Form>
          {showSuccesfull ? <h1>succfully submited</h1> : <div></div>}
        </SelectionCSS>
      </AllBody>
    </React.Fragment>
  );
}

export default Create_music;
