import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Login from "./components/login";
import Vivinosignup from "./components/vivinosignup";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            홈
          </Link>
          <Link className="navbar-brand" to={"/sign-in"}>
            로그인
          </Link>
          <Link className="navbar-brand" to={"/sign-up"}>
            회원가입
          </Link>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<Vivinosignup />} />
            <Route path="/terms" element={<div>Term</div>} />
            <Route path="/privacy" element={<div>Privacy</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
