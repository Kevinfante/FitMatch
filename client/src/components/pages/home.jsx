import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid } from '@material-ui/core';
import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Axios from 'axios';
import LogIn from '../SignInPage/logIn.jsx';
import Navbar from '../Shared_Components/NavBar.jsx';
import Add from './add.jsx';
import Recommend from '../Shared_Components/recommend.jsx';
// import comboObject from '../data/matchingColors';
// import pictures from '../../pictures';


function Home({ inApp, setInApp, user, setUser, weather, tops, outerWear, sweater, setCurrColor, currColor, outfit, setOutfit}) {
  const accordion = { width:"55%" }

  return !inApp ? (<div><LogIn setUser={setUser} setInApp={setInApp} /></div>) : (
  <Box sx={{ display: 'flex', width:"100%", justifyContent: 'center' }}>
      <div style={accordion}>
        <Navbar />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
          {`Welcome ${user}!`}
          </Typography>
          <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
          {`Outside Temp: ${Math.round(weather.main.temp)}°`}
          </Typography>
        </Stack>
        <Recommend
          tops={tops}
          outerWear={outerWear}
          sweater={sweater}
          weather={weather}
          setCurrColor= {setCurrColor}
          currColor = {currColor}
          outfit={outfit}
          setOutfit={setOutfit} />
        <Add />
      </div>
  </Box>

  )
}

export default Home;

// <img src='/images/united.png' />