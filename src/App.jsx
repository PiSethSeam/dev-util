import React, { useEffect } from 'react'
import TopBar from "./components/TopBar"
import GrepInfoFromQRCode from './components/GrepInfoFromQRCode'
import SuroundValueBySingleQuote from './components/SuroundValueBySingleQuote'
import Home from './components/Home'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200, anchorPlacement: "top-bottom" });
    AOS.refresh();
  }, []);
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      document.getElementById("op1").setAttribute("inputMode", "none");
      document.getElementById("op2").setAttribute("inputMode", "none");
    }
  }, [])
  return (
    <div>
      <TopBar />
        <div>
        <BrowserRouter>
          <Routes>
            <Route path="/dev-util" element={<Home />} />
            <Route path="/dev-util/GrepInfoFromQRCode" element={<GrepInfoFromQRCode />} />
            <Route path="/dev-util/SuroundValueBySingleQuote" element={<SuroundValueBySingleQuote />} />
          </Routes>
        </BrowserRouter>
        </div>
      <Footer className='max-sm:hidden' />
    </div>
  )
}

export default App