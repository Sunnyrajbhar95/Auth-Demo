
import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from "react"
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
function App() {
  return (
    <div className="App">
          <Routes>
             <Route path='/' element={<SignUp/>}/>
             <Route path='/login' element={<Login/>}/>
          </Routes>
    </div>

  );
}

export default App;
