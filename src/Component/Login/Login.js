import React from "react";
import Button from "../Button";
import Input from "../Input";
import { useState } from "react";
import { auth } from "../../Config/firebase";
import { useNavigate } from "react-router-dom";

function Login() {

  let LoginbtnStyle={
    padding:"10px",
    backgroundColor:"lightGreen",
    borderRadius:"5px",
    border:"none",
    fontWeight:"bolder",
    marginTop:"5px",
    marginBottom:"15px"

  }

  let InputStyle = {
    padding: "2px",
    width: "60%",
    border: "none",
    borderBottom: "1px solid black",
    backgroundColor: "antiquewhite",
    margin:"10px",
    outline:"none"
  };

  let Navigate = useNavigate();
  const [LoginData, setLoginData] = useState({ Email: "", password: "" });

  let getLoginInfo = (e) => {
    let { name, value } = e.target;
    setLoginData({ ...LoginData, [name]: value });
  };

  let CheckLogin = () => {
    auth
      .signInWithEmailAndPassword(LoginData.Email, LoginData.password)
      .then((success) => {
        console.log(success);
        // Navigate("/Profile")
        alert("Login Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let BackTosignUp = () => {
    Navigate("/SignUp");
  };

  return (
    <div>
      <h3 style={{paddingTop:"20px"}}>Login</h3>
      <Input
        InputStyle={InputStyle}
        name="Email"
        typ="email"
        plc="Enter your Registered Email"
        func={getLoginInfo}
      />
      <Input
        InputStyle={InputStyle}
        name="password"
        typ="password"
        plc="Enter your Password"
        func={getLoginInfo}
      />
      <Button btnStyle={LoginbtnStyle} btnfunc={CheckLogin} text="Login" />
      <p>
        Don't have an account? <br />
        <a
          style={{ color: "purple", textDecoration: "underline" }}
          onClick={BackTosignUp}
        >
          <i> SignUp </i>
        </a>
      </p>
    </div>
  );
}

export default Login;
