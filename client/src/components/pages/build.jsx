import React, {useState, useEffect} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navbar from '../Shared_Components/NavBar.jsx';
// import Carousel from '../Shared_Components/Carousel';
import Box from '@mui/material/Box';
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core';
import CarouselCont from '../Shared_Components/Carousel.jsx';
import ImageStack from '../Shared_Components/Images.jsx';


function Build({ setCurrColor, outfit, setOutfit, tops, outerWear, sweater, bottoms, shoes, currColor }) {

  // useEffect(()=>{

  // },[outfit])

  const [outFitArray, setOutfitArray] = useState([])
  const [color, setColor] = useState(null);
  const accordion = { width:"55%" }
  return (
    <Box sx={{ display: 'flex', width:"100%", justifyContent: 'center' }}>
      <div style={accordion}>
      <Navbar />
      <Grid align="center">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Tops</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <CarouselCont tees={tops}
            setCurrColor={setCurrColor}
            currColor={currColor}
            outfit={outfit}
            setOutfit={setOutfit}/>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Sweaters</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <CarouselCont tees={sweater}
            setCurrColor={setCurrColor}
            currColor={currColor}
            outfit={outfit}
            setOutfit={setOutfit}/>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>OuterWear</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <CarouselCont tees={outerWear}
            setCurrColor={setCurrColor}
            currColor={currColor}
            outfit={outfit}
            setOutfit={setOutfit}/>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Bottoms</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <CarouselCont tees={bottoms}
            setCurrColor={setCurrColor}
            currColor={currColor}
            outfit={outfit}
            setOutfit={setOutfit}/>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Footwear</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <CarouselCont tees={shoes}
            setCurrColor={setCurrColor}
            currColor={currColor}
            outfit={outfit}
            setOutfit={setOutfit}/>
          </AccordionDetails>
        </Accordion>
        </Grid>
      <div>
        <h2>Outfit:</h2>
        {outfit.length === 0 ? null : <ImageStack outfit={outfit} /> }
      </div>
    </div>
    </Box>
  );
}

export default Build;