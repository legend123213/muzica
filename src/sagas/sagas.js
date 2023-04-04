import { takeEvery, put, fork, all } from "redux-saga/effects";
import {
  get_music_request,
  add_music_request,
  set_music_requect,
  update_music_request,
  set_music,
  ToBeEdited,
  delete_music_request,
  deleteMusic,
  get_Status,
  updateMusicSetState,
} from "../slicers/music_slice";

import {
  addSong,
  get_ind_song,
  toGetIndividualRef,
  get_update_song,
  delete_song,
  get_song,
  updateFinale,
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
    action.payload = idd;
    console.log(action.payload);
    const delmusic = put(deleteMusic(action));
    yield delmusic;
  } catch (error) {
    console.log(error);
  }
}
function* updateMusicHandler(action) {
  console.log(action.payload);
  const id = action.payload.id;
  const ref = yield toGetIndividualRef(id);
  console.log(ref);
  delete action.payload.id;
  console.log(action.payload.id);
  yield updateFinale(ref, action.payload);
}
function* updateMusicRequestHandler(action) {
  const data = yield get_update_song(action.payload);
  const toBeEdited = put(updateMusicSetState(data));
  yield toBeEdited;
}
function* rotsaga() {
  yield takeEvery(get_music_request.type, get_muz);
}
function* watcherupdatemusic() {
  yield takeEvery(update_music_request.type, updateMusicRequestHandler);
}
function* watcherAddMusic() {
  yield takeEvery(add_music_request.type, create_music);
}
function* watcherSubmitUpdate() {
  yield takeEvery(ToBeEdited.type, updateMusicHandler);
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
    fork(watcherSubmitUpdate),
  ]);
}
