import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Create_music from "./create_music";
function Edit() {
  const edit = useSelector((state) => state.music.tobeEdited);

  const [newMusic, setnewMusic] = useState({
    name: edit.name,
    title: edit.title,
    length: edit.length,
    album: edit.album,
    id: edit.id,
    genre: edit.genre,
    btn: "EDIT",
  });
  useEffect(() => {
    setnewMusic({
      name: edit.name,
      title: edit.title,
      length: edit.length,
      album: edit.album,
      id: edit.id,
      genre: edit.genre,
      btn: "EDIT",
    });
  }, [edit]);
  console.log(newMusic);
  return <Create_music edit={newMusic} />;
}
export default Edit;
