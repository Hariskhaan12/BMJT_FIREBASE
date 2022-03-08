import React, { useState,useEffect } from "react";
import { auth, db } from "../Config/firebase";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import Input from "./Input";

function Profile() {
  let [D,setD]=useState([]);
  let Uid = auth.currentUser.uid;
  let userdata=[];
  let ref=db.ref("userInfo/" + Uid);
  ref.once('value',(snapshot)=>{
     let data=snapshot.val();
     userdata.push({FullName:data.FullName,Email:data.Email,Address:data.Address,Phone:data.Phone})
   })

  let initialState = {
    FullName: "",
    Phone: "",
    Email: "",
    Address: ""
  };
  let Navigate = useNavigate();
  const [Disable, setDisable] = useState(true)
  const [ProfileData, setProfileData] = useState(initialState);

  let LogOut = () => {
    // this is logout function
    auth
      .signOut()
      .then(() => {
        console.log("successfully signOut");
        alert("Signing Out....");
        Navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  let Home = () => {
    /// without signing out the user  still can visit home page
    Navigate("/");
  };
  //edit info
  let EditInfo = () => {
    setDisable(false);
  };

  let SaveInfo=()=>{
    let Uid=auth.currentUser.uid;
    db.ref("userInfo/"+Uid).set(ProfileData);
    console.log("done");
    // setProfileData(initialState);
   

  }


  let setInputHandler=(e)=>{
    let {name,value}=e.target;
    setProfileData({...ProfileData,[name]:value});
    console.log(ProfileData);
  }

  let BioStyle = {
    border: "1px solid black",
    width: "25%",
    marginTop: "5%",
  };

  let DetailInfoStyle = {
    border: "1px solid black",
    position: "absolute",
    width: "60%",
    top: "12%",
    left: "30%",
    height: "60%",
    paddingLeft: "12px",
    paddingTop: "12px",
  };
  let InputStyle = {
    padding: "2px",
    width: "60%",
    border: "none",
    borderBottom: "none",
    background:"transparent",
    marginLeft: "10%",
    outline: "none",
    display: "inline",
  };

  let editBtnStyle = {
    
  };

  useEffect(() => {
    return () => {
      setD(userdata)
    }
  }, [])
  //  {D[0].FullName === "" ||
  //     D[0].Address === "" ||
  //     D[0].Email === "" ||
  //     D[0].Phone === "" ?
  
// console.log(userdata);
  return (
    <>
        <div className="main">
          <h1>Profile</h1>
          <div className="Bio" style={BioStyle}>
            <p>Name:  </p>
            <p>Title : </p>
            <p>Description : </p>
          </div>
          <div className="DetailInfo" style={DetailInfoStyle}>
            <label style={{ float: "left" }}>Full name :</label>
            <span style={{ display: "block", overflow: "hidden" }}>
              <Input
               
                typ="text"
                name="FullName"
                func={setInputHandler}
                InputStyle={InputStyle}
                disabled={Disable}
              />
            </span>
            <label style={{ float: "left" }}>Phone :</label>
            <span style={{ display: "block", overflow: "hidden" }}>
              <Input
                
                typ="number"
                name="Phone"
                func={setInputHandler}
                InputStyle={InputStyle}
                disabled={Disable}
              />
            </span>
            <label style={{ float: "left" }}>Email :</label>
            <span style={{ display: "block", overflow: "hidden" }}>
              <Input
                
                typ="email"
                name="Email"
                func={setInputHandler}
                InputStyle={InputStyle}
                disabled={Disable}
              />
            </span>
            <label style={{ float: "left" }}>Address :</label>
            <span style={{ display: "block", overflow: "hidden" }}>
              <Input
                
                typ="text"
                name="Address"
                func={setInputHandler}
                InputStyle={InputStyle}
                disabled={Disable}
              />
            </span>
            <Button btnStyle={editBtnStyle} btnfunc={EditInfo} text="Edit" />
            <Button btnStyle={editBtnStyle} btnfunc={SaveInfo} text="Save" />
          </div>
          <Button btnfunc={LogOut} text="Log Out" />
          <Button btnfunc={Home} text="Goto Home" />
        </div>
    </>
  );
}

export default Profile;
