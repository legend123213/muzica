import React from "react";

import Home from "./components/home";
import Edit from "./components/edit";
import Login_from from "./components/login_from";
import Create_album from "./components/create_album";
import Create_music from "./components/create_music";
import music_store from "./stores/store";
import { Provider } from "react-redux";
import My_music from "./components/my_music";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Provider store={music_store}>
        <Router>
          <Routes>
            <Route path="/" element={<Login_from />} />
            <Route path="/home" element={<Home />} />

            <Route path="/login" element={<Login_from />} />
            <Route path="/album" element={<Create_album />} />
            <Route path="/create" element={<Create_music />} />
            <Route path="/create/mymusic" element={<My_music />} />
          </Routes>
        </Router>
      </Provider>
    </React.Fragment>
  );
}

export default App;
