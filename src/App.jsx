import React, { useState } from 'react';
import '../src/css/style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Sobre from './components/Pages/Sobre';
import Experiencia from './components/Pages/Experiencia';
import Educacao from './components/Pages/Educacao';
import Sidebar from './components/Sidebar/Sidebar';
import { SidebarProvider } from './components/Sidebar/SidebarClick';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <SidebarProvider>
          <Sidebar />
          <Routes>
            <Route path="/portfolio" element={<Home />} />
            <Route path="portfolio/sobre" element={<Sobre />} />
            <Route path="portfolio/experiencia" element={<Experiencia />} />
            <Route path="portfolio/educacao" element={<Educacao />} />
          </Routes>
        </SidebarProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
