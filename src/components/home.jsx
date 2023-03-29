import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  add_music_request,
  delete_music_request,
  update_music_request,
  get_music_request,
} from "../slicers/music_slice";
import Card from "./features/card";
import styled from "@emotion/styled";
import Navbar from "./features/navbar";

import { Link } from "react-router-dom";

// const Btnadd = styled.a`
//   width: 200px;
//   height: 60px;
//   cursor: pointer;
//   background-color: white;
//   border-radius: 30px;
//   border: 4px solid;
//   box-shadow: 0 0 0 0 rgba(0, 0, 0, 0, 0.4);
//   color: rgb(135, 130, 122);
//   display: inline-flex;
//   align-items: center;
//   &:hover {
//     box-shadow: rgba(120, 120, 120, 0.4) 0px 3px 8px;
//     background-color: greenyellow;
//     color: black;
//   }
// `;

const Img = styled.img`
  width: 80px;
  height: 80px;
  padding: 0px;
  z-index: 3;
  position: fixed;
  right: 5%;
  bottom: 10%;
  padding: 0px;
  border-radius: 80%;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.4);
  }
`;

function Home() {
  // const [musics, setMusic] = useState([]);
  const Cection = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `;

  const dispatch = useDispatch();
  const music = useSelector((state) => state.music.musicList);
  const isLoading = useSelector((state) => state.music.statuss);

  useEffect(() => {
    dispatch(get_music_request());
  }, []);
  useEffect(() => {
    console.log({ music, isLoading });
  }, [music]);
  const Homee = styled.div`
    margin: 0 0 0 0px;
    height: 95vh;
  `;
  const Welcome = styled.h1`
    margin-top: 0px;
  `;
  const Loading = styled.h1`
    text-align: center;
  `;
  const Paragraph = styled.p`
    text-align: center;
  `;
  return (
    <React.Fragment>
      <Navbar />
      <Homee>
        <div>
          <Welcome>Home</Welcome>
          <Paragraph>Welcome</Paragraph>
          {isLoading ? (
            <Cection>
              {music.map((m) => {
                if (m) {
                  return <Card key={m.id} musics={m} mymusic={true} />;
                }
              })}
            </Cection>
          ) : (
            <Loading>Loading..</Loading>
          )}
        </div>
        <Link to="/create">
          <Img src="img/add-square-svgrepo-com.svg" alt="none" />
        </Link>
      </Homee>
    </React.Fragment>
  );
}

export default Home;
