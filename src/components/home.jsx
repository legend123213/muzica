import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get_music_request } from "../slicers/music_slice";
import Card from "./features/card";
import styled from "@emotion/styled";

import { Link } from "react-router-dom";

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
  margin-left: 35%;
`;
const Loading = styled.h1`
  text-align: center;
`;
const Paragraph = styled.p`
  text-align: center;
`;

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const music = useSelector((state) => state.music.musicList);
  let isLoading = useSelector((state) => state.music.statuss);

  useEffect(() => {
    dispatch(get_music_request());

    isLoading = false;
  }, [isLoading]);

  return (
    <React.Fragment>
      <Homee>
        <div>
          <Welcome>All Collection Of Musics</Welcome>
          <Paragraph>
            manage your music collection with just a few clicks. With our
            user-friendly interface, you can create, read, update, and delete
            music records with ease. Whether you're a music enthusiast or a
            professional in the music industry, our system is designed to meet
            your needs. Say goodbye to the hassle of manually managing your
            music collection and hello to a more efficient and organized way of
            managing your music records.
          </Paragraph>
          {isLoading ? (
            <Cection>
              {music.map((m) => {
                if (m) {
                  return <Card key={m.id} musics={m} mymusic={false} />;
                }
              })}
            </Cection>
          ) : (
            <Loading>Loading..</Loading>
          )}
        </div>
        {user ? (
          <Link to="/mymusic/create">
            <Img src="../src/public/add-square-svgrepo-com.svg" alt="none" />
          </Link>
        ) : (
          <span></span>
        )}
      </Homee>
    </React.Fragment>
  );
}

export default Home;
