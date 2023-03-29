import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  musicList: [],
  myMusic: [],
  statuss: false,
  tobeEdited: {},
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
    deleteMusic(state, action) {
      state.musicList = state.musicList.filter((e) => {
        e.id !== action.payload;
      });
    },
    delete_music_request(action) {},
    update_music_request(state, action) {
      console.log(action.payload);
      state.tobeEdited = action.payload.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(
        action.payload.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
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
  set_music_requect,
} = music_sl.actions;
export default music_sl.reducer;
