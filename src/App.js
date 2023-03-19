import { useState } from 'react';
// import { useRoutes } from "react-router-dom";
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Nav from './pages/Nav';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Header from './components/Header';
// import Counter from "./components/Counter";


function App() {
  const title = 'My React Portfolio';


  return (
    <> 
    <Header title={title} />

    <Routes>
      <Route path="*" element={<Nav />} / >
      <Route path="/" element={<Home title={title} />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    {/* <Counter /> */}


    </>
        )
}

export default App;
