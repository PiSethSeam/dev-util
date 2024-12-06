import React, { useEffect } from 'react'
import TopBar from "./components/TopBar"
import ExtractInformationFromQRCode from './components/ExtractInformationFromQRCode'
import EncloseValueInSingleQuotes from './components/EncloseValueInSingleQuotes'
import Home from './components/Home'
import Footer from './components/Footer'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/EncloseValueInSngleQuotes" element={<EncloseValueInSingleQuotes />} />
              <Route path="/CaptureValueInSingleQuotes" element={<CaptureValueInSingleQuotes />} />
            </Routes>
          </Router>
        {/* <BrowserRouter>
          <Routes>
            <Route path="/dev-util" element={<Home />} />
            <Route path="/dev-util/ExtractInformationFromQRCode" element={<ExtractInformationFromQRCode />} />
            <Route path="/dev-util/EncloseValueInSingleQuotes" element={<EncloseValueInSingleQuotes />} />
          </Routes>
        </BrowserRouter> */}
        </div>
      <Footer className='max-sm:hidden' />
    </div>
  )
}

export default App