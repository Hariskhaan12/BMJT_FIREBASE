import React from 'react'
import Button from '../Button';
import Input from '../Input';
import {auth} from '../../Config/firebase'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function SignUp() {
 const [userData, setuserData] = useState({ email: "", password: "" });
 const [AllData, setAllData] = useState([]);


let SignUpbtnStyle = {
  padding: "10px",
  backgroundColor: "lightGreen",
  borderRadius: "5px",
  border: "none",
  fontWeight: "bolder",
  marginTop: "5px",
  marginBottom: "15px",
};

  let InputStyle = {
    padding: "2px",
    width: "60%",
    border: "none",
    borderBottom: "1px solid black",
    backgroundColor: "antiquewhite",
    margin:"10px",
    outline:"none"
  };



  // only one function for 2 different input fields
  let InputHandler = (e) => {
    // e.target.name , e.target.value
    const { name, value } = e.target;
    setuserData({ ...userData, [name]: value });
    //  console.log(userData);
  };

  let SignUp = () => {
    auth
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then((success) => {
        console.log(success);
      })
      .catch((error) => {
        console.log(error);
      });
    setAllData([...AllData, userData]);
  };

  let Navigate = useNavigate();

  let Loginfunc = () => {
    Navigate("/");
  };


  return (
    <div
      style={{
        width: "30%",
        textAlign: "center",
        // margin: "auto",
        position:"absolute",
        left:"35%",
        top:"20%",

        backgroundColor: "antiquewhite",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        paddingBottom:"20px"
      }}
    >
      <h3 style={{ paddingTop: "20px" }}>SignUp Form</h3>
      <Input
        InputStyle={InputStyle}
        name="email"
        typ="email"
        plc="Enter Email"
        func={InputHandler}
      />
      <Input
        InputStyle={InputStyle}
        name="password"
        typ="password"
        plc="Enter password"
        func={InputHandler}
      />
      <Button btnStyle={SignUpbtnStyle} btnfunc={SignUp} text="SignUp" />
      <p>
        Already Have an Account ? <br />
        <a
          style={{ color: "purple", textDecoration: "underline" }}
          onClick={Loginfunc}
        >
          <i>Login</i>
        </a>
      </p>
    </div>
  );
}

export default SignUp