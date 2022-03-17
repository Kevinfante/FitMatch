import React, {useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navbar from '../Shared_Components/NavBar';
// import Carousel from '../Shared_Components/Carousel';
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core';
import CarouselCont from '../Shared_Components/Carousel.js';

const tees = [
  {
    url: "united.png"
  },
  {
    url: "green.png"
  },
  {
    url: "red.png"
  },
  {
    url: "guyharvey.png"
  }
]

function Build() {
  const [outFitArray, setOutfitArray] = useState([])
  const [color, setColor] = useState(null);
  const accordion = { width:"55%" }
  return (
    <Grid align="center">
      <Navbar />
      <div style={accordion}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Tops</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <CarouselCont tees={tees}/>
            {/* <Carousel type={'top'} color={color} setColor={setColor}/> */}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Seaters</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* <Carousel /> */}
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
            {/* <Carousel /> */}
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
            {/* <Carousel /> */}
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
            {/* <Carousel /> */}
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        Outfit:
      </div>
    </Grid>
  );
}

export default Build;