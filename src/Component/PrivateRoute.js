import React from 'react'
import {Outlet,Navigate} from 'react-router-dom'
import { auth } from '../Config/firebase'

function PrivateRoute() {
    let LoggedIn=false;
if(auth.currentUser!=null)
{
    LoggedIn=true
    // console.log(auth.currentUser);
}

 return LoggedIn ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute