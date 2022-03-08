import React from 'react';
import './App.css'
import { useNavigate } from 'react-router-dom';
import Button from './Component/Button';
import Login from './Component/Login/Login';
import {auth} from './Config/firebase'





function App() {
  let ProfilebtnStyle={
    padding:"10px",
    backgroundColor:"yellow",
    borderRadius:"5px",
    border:"none",
    fontWeight:"bolder",
    marginTop:"5px",
    marginBottom:"15px"
  }


let Navigate=useNavigate();
  // let currentUser=auth.currentUser();
let NavProfile=()=>{
Navigate('/Profile')
}

  return (
    <div className="container">
      <h3 className="heading">WELCOME TO APP</h3>
      <div className="LoginForm">
        <Login btnStyle={ProfilebtnStyle} />
        <Button
          btnStyle={ProfilebtnStyle}
          btnfunc={NavProfile}
          text="goto Profile"
        />
      </div>
    </div>
  );
}

export default App