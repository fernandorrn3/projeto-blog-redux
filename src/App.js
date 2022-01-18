import './App.css';
import Home from './componentes/home/home'
import { Adm } from './componentes/adm/adm';
import { Addpost } from './componentes/adm/contentadm/addpost/addpost';
import { Singlepost } from './componentes/singlepost/singlePost';
import { Categoria } from './componentes/categoria/categoria';
import { Editpost } from './componentes/adm/contentadm/editpost/editpost';
import { Dashboard } from './componentes/adm/contentadm/dashboard/dashboard';
import { Routes, Route, Link } from "react-router-dom";

import React from 'react';
function App() {
  return (

    <div className="App">
       <Routes >
        <Route path="/" element={<Home />} />
        
        <Route path="/:user/adm" element={<Adm />} >
        <Route index element={<Dashboard/>}/>
        <Route path="addpost" element={<Addpost/>}/>
        <Route path="editpost" element={<Editpost/>}/>
        </Route>
        <Route path='/post/:post' element={<Singlepost/>}/>
        <Route path='/categoria/:categoria' element={<Categoria/>}/>
      </Routes>
    </div>

  );
}

export default App;
