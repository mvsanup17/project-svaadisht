import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./components/navbar";
import Cuisines from './components/cuisines';
import Chefs from './components/chefs';
import Indian from './components/indian';
import Home from './components/home';
import Main from './components/main';
import About from './components/about';
import Chinese from './components/chinese';
import Mexican from './components/mexican';
import Italian from './components/italian';
import American from './components/american';
import French from './components/french';
import Spanish from './components/spanish';
import Japanese from './components/japanese';
import Sanjeev from './components/sanjeev';
import Vikas from './components/vikas';
import Jamie from './components/jamie';
import Gordon from './components/gordon';
import Pooja from './components/pooja';
import Ranveer from './components/ranveer';
import Yannick from './components/yannick';
import Clare from './components/clare';
import UploadItems from './components/files';
import Admin from './components/admin';
import Views from './components/views';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/cuisines' element={<Cuisines/>}/>
          <Route path='/chefs' element={<Chefs/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/upload' element={<UploadItems/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/views' element={<Views/>}/>
          <Route path='/indian' element={<Indian/>}/>
          <Route path='/chinese' element={<Chinese/>}/>
          <Route path='/mexican' element={<Mexican/>}/>
          <Route path='/italian' element={<Italian/>}/>
          <Route path='/american' element={<American/>}/>
          <Route path='/french' element={<French/>}/>
          <Route path='/spanish' element={<Spanish/>}/>
          <Route path='/japanese' element={<Japanese/>}/>
          <Route path='/sanjeev' element={<Sanjeev/>}/>
          <Route path='/vikas' element={<Vikas/>}/>
          <Route path='/jamie' element={<Jamie/>}/>
          <Route path='/gordon' element={<Gordon/>}/>
          <Route path='/pooja' element={<Pooja/>}/>
          <Route path='/ranveer' element={<Ranveer/>}/>
          <Route path='/yannick' element={<Yannick/>}/>
          <Route path='/clare' element={<Clare/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
