import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ComplexButton from '../Shared_Components/ComplexButton.jsx'
import Modal from '@mui/material/Modal';
import Navbar from '../Shared_Components/NavBar.jsx';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const Input = styled('input')({
  display: 'none',
});

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

  const [type, setType] = React.useState('');
  const [color, setColor] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [url, setUrl] = React.useState('');
  const [colorCheck, setColorCheck] = React.useState('');

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  const handleUrlChange = (event) => {
    const newUrl=event.target.value.slice(12)
    setUrl(newUrl);
  };

  const handleCheck = (e) => {
    e.preventDefault();
    setColorCheck(`This product's closest color: black`)
  }

  const handleAddSubmit = (e) => {
    console.log('here')
    e.preventDefault();
    const data = {
      type: type,
      description: description,
      url: url,
      color: color
    }
    axios.post('/api/add', data)
      .then((res)=>{
        setAddOpen(false);
        setType('');
        setColor('');
        setUrl('');
        setDescription('');
      })
  }
  // const accordion = { width:"55%" }

  return (
    <div>
      <div>
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
          <div>
            <Stack direction="row" alignItems="center" spacing={3}>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Check A Color!
              </Typography>
              <label htmlFor="icon-button-file">
                <Input
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                  onChange={handleCheck} />
                <IconButton color="primary" aria-label="upload picture" component="span">
                  <PhotoCamera />
                </IconButton>
              </label>
              {colorCheck.length > 1 ? ( <Typography id="modal-modal-description" sx={{ mt: 2 }}>{`${colorCheck}`}
              </Typography>) : null}
             </Stack>
            </div>
          </Box>
        </Modal>
      </div>
      <div>
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
              Add an Item using the DropDowns!
            </Typography>
            <div>
            <span>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
               What kind of item are you adding?
              </Typography>
            </span>
            <span>
              <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={type}
                      label="Type"
                      onChange={handleTypeChange}
                    >
                      <MenuItem value={'top'}>Top</MenuItem>
                      <MenuItem value={'sweater'}>Sweater</MenuItem>
                      <MenuItem value={'outerWear'}>Outer Wear</MenuItem>
                      <MenuItem value={'bottoms'}>Bottoms</MenuItem>
                      <MenuItem value={'footwear'}>Footwear</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
            </span>
            </div>
            <div>
            <span>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
               What is the color of the item?
              </Typography>
            </span>
            <span>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Color</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={color}
                    label="Color"
                    onChange={handleColorChange}
                  >
                    <MenuItem value={'black'}>Black</MenuItem>
                    <MenuItem value={'white'}>White</MenuItem>
                    <MenuItem value={'beige'}>Beige</MenuItem>
                    <MenuItem value={'gray'}>Gray</MenuItem>
                    <MenuItem value={'fuschia'}>Fuschia</MenuItem>
                    <MenuItem value={'red'}>Red</MenuItem>
                    <MenuItem value={'brown'}>Brown</MenuItem>
                    <MenuItem value={'light-brown'}>Light-Brown</MenuItem>
                    <MenuItem value={'dark-brown'}>Dark Brown</MenuItem>
                    <MenuItem value={'orange'}>Orange</MenuItem>
                    <MenuItem value={'yellow'}>Yellow</MenuItem>
                    <MenuItem value={'olive'}>Olive</MenuItem>
                    <MenuItem value={'green'}>Green</MenuItem>
                    <MenuItem value={'blue'}>Blue</MenuItem>
                    <MenuItem value={'pink'}>Pink</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </span>
            </div>
            <div>
            <span>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
               Can you describe the item?
              </Typography>
            </span>
            <span>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <TextareaAutosize
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder="description"
                    defaultValue={description}
                    onChange={handleChange}
                    style={{ width: 400 }}
                  />
                </FormControl>
              </Box>
            </span>
            </div>
            <div>
            <Stack direction="row" alignItems="center" spacing={3}>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Upload a picture!
              </Typography>
              <label htmlFor="icon-button-file">
                <Input
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                  onChange={handleUrlChange} />
                <IconButton color="primary" aria-label="upload picture" component="span">
                  <PhotoCamera />
                </IconButton>
              </label>
              {url.length > 1 ? ( <Typography id="modal-modal-description" sx={{ mt: 2 }}>{`${url}`}
              </Typography>) : null}
             </Stack>
            </div>
            <Box sx={{ display: 'flex', width:"100%", justifyContent: 'space-evenly' }}>
            <Button
              variant="contained"
              onClick={handleAddSubmit}>Submit!</Button>
            <Button
              variant="contained"
              style={{background: 'red'}}
              onClick={(e) => handleAddClose}>Cancel</Button>
              </Box>
          </Box>
        </Modal>
      </div>
      </div>
  );
}

export default Add;