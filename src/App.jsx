import React from "react";

import Home from "./components/home";
import Edit from "./components/edit";
import SignUp from "./components/registration_form";
import Login_from from "./components/login_from";
import Create_album from "./components/create_album";
import Create_music from "./components/create_music";
import music_store from "./stores/store";
import { Provider } from "react-redux";
import Signout from "./components/signout";
import Mymusic from "./components/my_music";

import { Route } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/features/navbar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route path="/login" element={<Login_from />} />
      <Route path="/signup" element={<SignUp />} />
      <Route index element={<Home />} />
      <Route path="/album" element={<Create_album />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/signout" element={<Signout />} />
      <Route path="/mymusic" element={<Mymusic />} />
      <Route path="/mymusic/create" element={<Create_music />} />
    </Route>
  )
);

function App() {
  return (
    <React.Fragment>
      <Provider store={music_store}>
        <RouterProvider router={router} />
      </Provider>
    </React.Fragment>
  );
}

export default App;
