import React, { useEffect } from 'react'
import TopBar from "./components/TopBar"
import Content from './components/Content'
import Footer from './components/Footer'

const App = () => {
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
          <Content />  
        </div>
      <Footer className='max-sm:hidden' />
    </div>
  )
}

export default App