import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import ComplexButton from '../Shared_Components/ComplexButton.js'
import Modal from '@mui/material/Modal';
import Navbar from '../Shared_Components/NavBar.js';

function Add() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [addOpen, setAddOpen] = React.useState(false);
  const handleAddOpen = () => setAddOpen(true);
  const handleAddClose = () => setAddOpen(false);

  const [checkOpen, setCheckOpen] = React.useState(false);
  const handleCheckOpen = () => setCheckOpen(true);
  const handleCheckClose = () => setCheckOpen(false);

  const accordion = { width:"55%" }

  return (
    <Grid align="center">
      <Navbar />
      <div style={accordion}>
      <ComplexButton
        title={'Check A Color'}
        url={'/images/colorWheel.png'}
        func={handleCheckOpen}
      />
          <Modal
          open={checkOpen}
          onClose={handleCheckClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              This is the Check modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
      <div style={accordion}>
      <ComplexButton
        title={'Add to Closet!'}
        url={'/images/closet.png'}
        func={handleAddOpen}
      />
        <Modal
          open={addOpen}
          onClose={handleAddClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              This is the Add modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    </Grid>
  );
}

export default Add;