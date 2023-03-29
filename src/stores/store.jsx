import createSagaMiddleware from "@redux-saga/core";
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import music_sl from "../slicers/music_slice";
import rootSaga from "../sagas/sagas";

const saga = createSagaMiddleware();
const reducer = combineReducers({ music: music_sl });

const music_store = configureStore({
  reducer,
  middleware: [saga],
});

saga.run(rootSaga);
export default music_store;
