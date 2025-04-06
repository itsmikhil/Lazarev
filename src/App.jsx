import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import IntroText from "./components/LandingPage/IntroText";
import VideoContainer from "./components/VideoContainer/VideoContainer";
import About from "./components/About/About";

import Page2 from "./components/Page2/Page2";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import Premium from "./components/Premium/Premium";
import Products from "./components/Products/Products";

// const App = () => {
//   return (
//     <div className="main relative w-full min-h-[100vh] bg-[#111111] text-white  m-0 p-0 box-border">
//       <NavBar />
//       <LandingPage />
//       <VideoContainer />
//       <About />
//       <Page2/>
//       <CaseStudies/>
//       <Premium/>
//       <Products/>
//       <LandingPage />
//     </div>
//   );
// };

// import gsap from 'gsap'
// import { ReactLenis } from 'lenis/react'
// import { useEffect, useRef } from 'react'

// function App() {
//   const lenisRef = useRef()
  
//   useEffect(() => {
//     function update(time) {
//       lenisRef.current?.lenis?.raf(time * 1000)
//     }
  
//     gsap.ticker.add(update)
  
//     return () => gsap.ticker.remove(update)
//   }, [])
  
//   return (
//     <ReactLenis options={{ autoRaf: false }} ref={lenisRef}>
    //   <div className="main relative w-full min-h-[100vh] bg-[#111111] text-white  m-0 p-0 box-border">
    //    <NavBar />
    //    <LandingPage />
    //    <VideoContainer />
    //    <About />
    //    <Page2/>
    //    <CaseStudies/>
    //    <Premium/>
    //    <Products/>
    //    <LandingPage />
    //  </div>
//     </ReactLenis>
//   )
// }
import { ReactLenis, useLenis } from 'lenis/react'
import Process from "./components/Process/Process";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <ReactLenis root options={{lerp:0.5}}>
      <div className="main relative w-full min-h-[100vh] bg-[#111111] text-white  m-0 p-0 box-border">
       <NavBar/>
       <LandingPage />
       <VideoContainer />
       <About />
       <Process/>
       <Page2/>
       <CaseStudies/>
       <Premium/>
       <Products/>
       
       <Footer/>
       {/* <LandingPage /> */}
     </div>
    </ReactLenis>
  )
}
export default App;

