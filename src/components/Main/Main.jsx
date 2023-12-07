import React from "react";
import reactLogo from '../../assets/react.svg'
import viteLogo from '../../assets/vite.svg'
import { Route, Routes, Navigate } from 'react-router-dom'
import ChristmasList from "./ChristmasList";
import About from "./About";
import Contact from "./Contact";
import Staff from "./Staff";
import ChristmasCourse from "./ChristmasCourse";
import Topic from "./Topic";
import Home from "./Home";
import Donations from "./Donations";


const Main = () => {
  return (
        <main>
            {/* <div>
                <a href="https://vitejs.dev" target="_blank">
                   <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                   <img src={reactLogo} className="logo react" alt="React logo" />
               </a>
            </div> */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/staff' element={<Staff />} />
                <Route path='/christmaslist' element={<ChristmasList />} />
                <Route path='/christmascourse' element={<ChristmasCourse />} />
                <Route path='/topic' element={<Topic/>} />
                <Route path='/donations' element={<Donations/>} />
                <Route path='/*' element={<Navigate to={'/'} />} />
            </Routes>
        </main>);
};

export default Main;
