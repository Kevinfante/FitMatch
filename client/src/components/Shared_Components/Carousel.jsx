import React from 'react';
// import Slider from "react-slick";
import Carousel from 'react-material-ui-carousel';
import Item from './carouselItem.jsx'

function CarouselCont({ tees, setCurrColor, currColor, outfit, setOutfit }) {
  return(
    <Carousel>
      {tees.map((tee)=> <Item
        {...tee}
        setCurrColor={setCurrColor}
        currColor={currColor}
        outfit={outfit}
        setOutfit={setOutfit}/>)}
    </Carousel>

  )
}


export default CarouselCont;
