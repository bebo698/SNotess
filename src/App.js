 import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Protected from './components/Protected';
 
 function App( ) {
  return (
    <>
    <Navbar/>
    <Routes>
      {/* outlet 
      بتشتغل ازاى 
      بعمل 
      <Route جواها element اسم باي  */}
      {/* وبعدها باحط اي روت عايز اوت ليت عليه بدل ما اروح اكرره فى الفانكشن هناك كل مرة ومجرد ما انادى على الاوت ليت فى المكان اللى عايز فيه الحاجات تتنادى  */}
      {/* هيقوم جايبلى كل الاطفال هنا ك */}
        
          <Route element={<Protected/>}>
            {/* هنا فيه طفل واحد هنادى عليه */}
              <Route path='/home' element={<Home/>} />
          </Route>
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>} />

        </Routes>
 
      
    </>
  );
 }
 
 export default App;
 