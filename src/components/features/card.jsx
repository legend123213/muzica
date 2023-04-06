import React, { useEffect, useState } from "react";
import {
  delete_music_request,
  update_music_request,
  get_music_request,
} from "../../slicers/music_slice";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import soundIcon from "../../assets/imgs/sound.png";

const CardTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
  padding: 8px;
  color: #e9f3f9;
`;

const CardBody = styled.p`
  font-size: 14px;
  padding-left: 8px;
  color: #e9f3f9;
`;

// const Btn = styled.button((props) => ({
//   color: props.color,
// }));
const BtnEdit = styled.button`
  margin: 2px 35px 10px 8px;
  border: none;
  color: white;
  cursor: pointer;
  background-color: #2da4db;
  width: 40%;
  height: 40px;
  border-radius: 10px;
  transition: all 200ms ease-in;
  &:hover {
    font-weight: bold;
    background-color: #187098;
  }
`;
const BtnDel = styled.button`
  border: none;
  color: white;
  cursor: pointer;
  background-color: #ad4a53;
  width: 40%;
  height: 40px;
  border-radius: 10px;
  transition: all 200ms ease-in;
  margin-right: 3px;
  margin-left: 6px;
  &:hover {
    font-weight: bold;
    background-color: #d51e2d;
  }
`;
const Len = styled.h6`
  height: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: end;
  padding-right: 10px;
  color: #e9f3f9;
`;

const Card_in = styled.div`
  color: #e9f3f9;
  width: 20%;
  height: 40%;
  min-width: 200px;
  margin: 20px;
  border-radius: 10px;
  border-color: #245953;
  border-style: light;
  background-color: #2f302f;
  box-shadow: rgba(80, 80, 80, 0.24) 0px 3px 8px;
  transition: all 300ms ease-out;
  &:hover {
    box-shadow: rgba(120, 120, 120, 0.4) 0px 3px 8px;

    color: white;
    background-color: #0e0d0d;
  }
`;

const Image = styled.div`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  height: 200px;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: whitesmoke;
`;
const Btn = styled.div`
  margin: 0px 0px 15px 10px;
`;

function Card(Props) {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [getid, Setid] = useState("");

  const handleupdate = (id) => {
    console.log(id);
    dispatch(update_music_request(id));
    nav("/edit", { state: { id: id } });
  };
  const handledelete = (id) => {
    console.log(id);
    dispatch(delete_music_request(getid));
    dispatch(get_music_request());
    nav("/");
  };
  useEffect(() => {
    Setid(Props.musics.id);
  }, []);
  return (
    <Card_in>
      <Image id={Props.id}>
        <Img src={soundIcon} />
      </Image>

      <Btn>
        <CardTitle>{Props.musics.title}</CardTitle>
        <CardBody>{Props.musics.name}</CardBody>
        <Len>Length :{Props.musics.length}</Len>

        {Props.mymusic ? (
          <div>
            <BtnEdit
              onClick={() => {
                handleupdate(Props.musics.id);
              }}
            >
              EDIT
            </BtnEdit>
            {/* </Link> */}

            <BtnDel
              onClick={() => {
                handledelete(Props.musics.id);
              }}
            >
              Delete
            </BtnDel>
          </div>
        ) : (
          <div></div>
        )}
      </Btn>
    </Card_in>
  );
}

export default Card;
