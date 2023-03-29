import axios from "axios";
import produce, { createDraft } from "immer";
import { db } from "./firebase";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

// const ROOTAPI = axios.create({
//   baseURL: `https://my-json-server.typicode.com/legend123213/music1221/`,
// });
//Getting musics from the firebase using variable musicscollection
//Getting individual user musics from the firebase using variable indMusic
const indMusic = collection(db, "individualMusic");
const musicscollection = collection(db, "allmusic");
async function get_ind_song(id) {
  // const { data: postt } = await ROOTAPI.get(`individual_music/${id}`);

  // return postt;
  const data = await getDocs(indMusic);
  const dataind = data.docs.map((doc) => ({ ...data.docs, id: doc.id }));
  return dataind;
}

async function addSong(data) {
  // const song = await get_ind_song(id);

  // console.log(song);
  // const newMusic = await myAsyncFunction(id, data);
  // console.log(newMusic);
  // const sel = delete_song(id);

  // const newSong = await ROOTAPI.post(`musics/`, data);
  // const news = await get_song();
  // console.log(newSong);
  // console.log(news);
  // return newSong;
  const newSong = await addDoc(musicscollection, data);
  return newSong;
}
const myAsyncFunction = async (id, data) => {
  const draft = createDraft(data);
  // modify the draft object here
  draft.musics.push(data);
  return produce(draft);
};
async function get_song() {
  // const { data: postt } = await ROOTAPI.get(`musics`);

  // return postt;

  const data = await getDocs(musicscollection);
  const arrOfData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return arrOfData;
}
async function update_song(id) {
  const UpdateMusic = doc(db, "allmusic", id);
  console.log(UpdateMusic);
}
async function delete_song(id) {
  // const { data: Delete } = await ROOTAPI.delete(`individual_music/${id}`);
  // return Delete;

  const deletedMusic = doc(db, "allmusic", id);
  console.log(deletedMusic);
  return await deleteDoc(deletedMusic);
}

export { update_song, get_song, get_ind_song, delete_song, addSong };
