import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';
import LogIn from '../SignInPage/logIn';
import Navbar from '../Shared_Components/NavBar.js';
import comboObject from '../data/matchingColors';
// import pictures from '../../pictures';


function Home({ inApp, setInApp, user, setUser}) {

  return !inApp ? (<div><LogIn setUser={setUser} setInApp={setInApp} /></div>) : (
    <div>
      <Navbar />
      <div>
        {`Welcome ${user}!`}
      </div>
    </div>
  )
}

export default Home;

// <img src='/images/united.png' />