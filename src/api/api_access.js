import { db } from "./firebase";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore";

const indMusic = collection(db, "individualMusic");
const musicscollection = collection(db, "allmusic");
async function get_ind_song(id) {
  const data = await getDocs(indMusic);
  const dataind = data.docs.map((doc) => ({ ...data.docs, id: doc.id }));
  return dataind;
}
//add document into firebase
async function addSong(data) {
  const newSong = await addDoc(musicscollection, data);
  return newSong;
}
//get all data form collection
async function get_song() {
  const data = await getDocs(musicscollection);
  const arrOfData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return arrOfData;
}
//get individual data form collection to be updated
async function get_update_song(id) {
  const toBeEditedData = (await getDoc(toGetIndividualRef(id))).data();
  console.log(toBeEditedData);
  toBeEditedData.id = id;
  return toBeEditedData;
}

function toGetIndividualRef(id) {
  const Music = doc(db, "allmusic", id);
  return Music;
}
//update the data
async function updateFinale(ref, data) {
  await updateDoc(ref, data);
}
//to delete data
async function delete_song(id) {
  const deletedMusic = doc(db, "allmusic", id);
  console.log(deletedMusic);
  return await deleteDoc(deletedMusic);
}

export {
  get_update_song,
  get_song,
  get_ind_song,
  delete_song,
  addSong,
  toGetIndividualRef,
  updateFinale,
};
