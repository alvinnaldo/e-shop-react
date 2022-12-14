import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import { loginAction } from "./actions/userAction";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import Products from "./pages/Products";
import { API_URL } from "./helper";
import Detail from "./pages/Detail";

function App() {
  const [loader, SetLoader] = useState(true);
  const dispatch = useDispatch();
  const keepLogin = () => {
    let getLocalStorage = JSON.parse(localStorage.getItem("eshop_login"));
    console.log(getLocalStorage);
    if (getLocalStorage) {
      Axios.get(`${API_URL}/user?id=${getLocalStorage.id}`)
        .then((res) => {
          delete res.data[0].password;
          localStorage.setItem("eshop_login", JSON.stringify(res.data[0]));
          dispatch(loginAction(res.data[0]));
          SetLoader(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      SetLoader(false);
    }
  };

  useEffect(() => {
    keepLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Navbar loader={loader} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
