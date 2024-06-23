import {Route, Routes} from "react-router-dom";
import React from "react";
// import "./App.css";
import Nav from "./components/Nav";
import Experience from "./pages/Experience";

import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Abt from "./pages/Abt";


const App = () => {
  return (
  <div className=' flex flex-col   bg-[url("/Users/sushma/Downloads/top-course-starter/src/pictures/download.png")] bg-cover' >
    <div className="h-16" ><Nav/></div>
    <div >
    <Routes>
     
      <Route path="/" element={<Abt/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Experience" element={<Experience/>}/>
      <Route path="/Projects" element={<Projects/>}/>
     
    </Routes>
   {/* <Abt/>
   <Skills/>
   
   <Projects/>
   <Experience/>
    <Contact/> */}

    </div>
    </div>
    
  );
};

export default App;
