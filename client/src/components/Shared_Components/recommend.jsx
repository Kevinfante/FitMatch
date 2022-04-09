import React from "react";
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core';
import { Stack, Typography } from '@mui/material';
import CarouselCont from './Carousel.jsx';

function Recommend({ tops, outerWear, sweater, weather, setCurrColor, currColor, outfit, setOutfit }) {
  let currentArray=[];
  if (weather.weather.main === 'Snow' || weather.weather.main==='rain'){
    currentArray = currentArray.concat(outerWear)
  } else if (weather.weather.main != "Snow" && weather.main.temp < 70) {
    currentArray = currentArray.concat(sweater)
  } else {
    currentArray = currentArray.concat(tops)
  }
  return (
    <div>
      <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
        {`You Can Start Here: `}
      </Typography>
      <CarouselCont
        tees={currentArray}
        setCurrColor= {setCurrColor}
        currColor = {currColor}
        outfit={outfit}
        setOutfit={setOutfit} />
    </div>
  )
}

export default Recommend;