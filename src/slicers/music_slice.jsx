import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  musicList: [],
  myMusic: [],
  statuss: false,
  tobeEdited: {
    album: "",
    genre: "",
    id: "",
    length: "",
    name: " ",
    title: "",
  },
  id: "",
};

const music_sl = createSlice({
  name: "muzic",
  initialState,
  reducers: {
    set_music(state, action) {
      state.musicList = [...action.payload];

      state.statuss = true;
    },
    get_music_request() {
      console.log("action");
    },
    set_music_requect(state, action) {
      state.myMusic.push(action.payload);
    },
    add_music_request(state, action) {
      state.myMusic.push(action.payload);
    },
    ToBeEdited(state, action) {
      state.tobeEdited.name = "";
      state.tobeEdited.id = "";
      state.tobeEdited.album = "";
      state.tobeEdited.title = "";
      state.tobeEdited.length = "";
      state.tobeEdited.genre = "";
    },
    deleteMusic(state, action) {
      state.musicList = state.musicList.filter((e) => {
        e.id !== action.payload;
      });
    },
    delete_music_request(action) {},
    update_music_request(state, action) {
      console.log(action.payload);
      // state.tobeEdited = action.payload.docs.map((doc) => ({
      //   ...doc.data(),
      //   id: doc.id,
      // }));
      // const arr = action.payload.docs.map((doc) => ({
      //   ...doc.data(),
      //   id: doc.id,
      // }));
      // console.log(arr);
    },
    updateMusicSetState(state, action) {
      console.log(action.payload);
      state.tobeEdited.name = action.payload.name;
      state.tobeEdited.id = action.payload.id;
      state.tobeEdited.album = action.payload.album;
      state.tobeEdited.title = action.payload.title;
      state.tobeEdited.length = action.payload.length;
      state.tobeEdited.genre = action.payload.genre;
    },
    get_Status(state) {
      return state.Status;
    },
  },
});

export const {
  add_music_request,
  update_music_request,
  delete_music_request,
  deleteMusic,
  get_music_request,
  set_music,
  set_Status,
  get_Status,
  updateMusicSetState,
  set_music_requect,
  ToBeEdited,
} = music_sl.actions;
export default music_sl.reducer;
