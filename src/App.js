/* eslint-disable no-unused-vars */
import React from 'react';
// import { useRoutes } from "react-router-dom";
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Nav from './pages/Nav';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/footer';
import Portfolio from './pages/Projects/projects';
import ProjectCard from './pages/Projects/projectCard';
import About from './pages/About';
// import Projects from './pages/Projects/Projects';
// import Counter from "./components/Counter";


function App() {
  const title = 'Nicola Cahill - Portfolio';

  return (
    <> 
    <Header title={title} />

    <Routes>
      <Route path="*" element={<Nav />} / >
      <Route path="/" element={<Home title={title} />} />
      <Route path="/src/pages/About.js" element={<About /> } />
      <Route path="/contact" element={<Contact />} />
      <Route path="./assets/portfolio" element={<Portfolio />} />
      <Route path="/src/pages/Projects/projectCard.js" element={<projectCard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <projectCard/>
    {/* <Counter /> */}
    <Footer/>

    </>
        )
}

export default App;
