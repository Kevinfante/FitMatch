import React from "react";
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core';
import Navbar from '../Shared_Components/NavBar.jsx';
// import WardrobeItem from '../Shared_Components/wardrobeItem.js';
import CarouselCont from '../Shared_Components/Carousel.jsx';

function Wardrobe() {
  // const container = {height: '100vh'}
  // const section = {height: '20%'}
  return (
    <Grid align="center">
    <Navbar />
      <div>
        Tops:
        <CarouselCont tees={tees} />
      </div>

    </Grid>
  )
}

export default Wardrobe;