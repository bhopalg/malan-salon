import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./homepage";
import FooterOne from "./components/footer-one/footer-one";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header/>
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Homepage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
        <FooterOne/>
        <Footer/>
    </div>
  );
}

export default App;
