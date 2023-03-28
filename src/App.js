import React from 'react';
// import { useRoutes } from "react-router-dom";
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Nav from './pages/Nav';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer/footer';
import Portfolio from './pages/Projects/Projects';
// import Counter from "./components/Counter";


function App() {
  const title = 'Nicola Cahill - Portfolio';


  return (
    <> 
    <Header title={title} />

    <Routes>
      <Route path="*" element={<Nav />} / >
      <Route path="/" element={<Home title={title} />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="./assets/portfolio" element={<Portfolio />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    {/* <Counter /> */}
    <Footer/>

    </>
        )
}

export default App;
