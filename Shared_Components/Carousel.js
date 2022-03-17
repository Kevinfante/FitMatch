import React from 'react';
// import Slider from "react-slick";
import Carousel from 'react-material-ui-carousel';
import Item from './carouselItem.js'

function CarouselCont({ tees }) {
  return(
    <Carousel>
      {tees.map((tee)=> <Item {...tee} />)}
    </Carousel>

  )
}


export default CarouselCont;
