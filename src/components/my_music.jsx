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

import { Link, useNavigate } from "react-router-dom";

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
const Cection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
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

function Mymusic() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const music = useSelector((state) => state.music.musicList);
  const user = useSelector((state) => state.auth.user);
  const mymusics = music.filter((music) => music.user_id === user.uid);
  let isLoading = useSelector((state) => state.music.statuss);
  console.log(mymusics);
  useEffect(() => {
    if (user) {
      dispatch(get_music_request());

      isLoading = false;
    } else {
      nav("/");
    }
  }, [isLoading]);

  return (
    <React.Fragment>
      <Homee>
        <div>
          <Welcome>Play With Your Musics Data </Welcome>
          <Paragraph>
            your users to easily manage their music collections with features
            such as search and filter options, sorting capabilities, and the
            ability to add custom fields. Contact us today to learn more about
            how our system can benefit your business and improve the overall
            user experience.
          </Paragraph>
          {isLoading ? (
            <Cection>
              {mymusics.map((m) => {
                if (m) {
                  return <Card key={m.id} musics={m} mymusic={true} />;
                }
              })}
            </Cection>
          ) : (
            <Loading>Loading..</Loading>
          )}
        </div>
        <Link to="/mymusic/create">
          <Img src="img/add-square-svgrepo-com.svg" alt="none" />
        </Link>
      </Homee>
    </React.Fragment>
  );
}

export default Mymusic;
