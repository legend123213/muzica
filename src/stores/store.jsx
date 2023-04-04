import createSagaMiddleware from "@redux-saga/core";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import music_sl from "../slicers/music_slice";
import auth_slice from "../slicers/auth_slice";
import rootSaga from "../sagas/sagas";

const saga = createSagaMiddleware();
const reducer = combineReducers({ music: music_sl, auth: auth_slice });

const music_store = configureStore({
  reducer,
  middleware: [saga],
});

saga.run(rootSaga);
export default music_store;
