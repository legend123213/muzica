import { takeEvery, put, fork, all } from "redux-saga/effects";
import {
  get_music_request,
  add_music_request,
  set_music_requect,
  update_music_request,
  set_music,
  set_Status,
  delete_music_request,
  deleteMusic,
  get_Status,
} from "../slicers/music_slice";
import musicArray from "../stores/db";
import axios from "axios";
import {
  addSong,
  get_ind_song,
  update_song,
  delete_song,
  get_song,
} from "../api/api_access";

function* get_muz() {
  try {
    const music = yield get_song();
    console.log(music);

    const get_music = put(set_music(music));
    yield get_music;
  } catch (e) {
    console.log(e);
  }
}
function* create_music(action) {
  try {
    const data = action.payload;
    console.log(data);
    const addmusic = yield addSong(action.payload);
    console.log(addmusic);
    yield addmusic;
  } catch (e) {
    console.log(e);
  }
}
function* deletemusic(action) {
  try {
    const idd = action.payload;
    console.log(idd);

    yield delete_song(idd);
    const delmusic = put(deleteMusic(idd));
    yield delmusic;
  } catch (error) {
    console.log(error);
  }
}
function* updateMusicHandler(action) {
  yield update_song(action.payload);
}
function* rotsaga() {
  yield takeEvery(get_music_request.type, get_muz);
}
function* watcherupdatemusic() {
  yield takeEvery(update_music_request.type, updateMusicHandler);
}
function* watcherAddMusic() {
  yield takeEvery(add_music_request.type, create_music);
}
function* watcherDelMusic() {
  yield takeEvery(delete_music_request.type, deletemusic);
}
export default function* rootSaga() {
  yield all([
    fork(watcherAddMusic),
    fork(rotsaga),
    fork(watcherDelMusic),
    fork(watcherupdatemusic),
  ]);
}
