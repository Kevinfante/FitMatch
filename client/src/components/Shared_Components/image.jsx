import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Image({url}) {
  const imageStyle = {height:'200px', width:'150px'}
  return (
    <div>
      <img src={`/images/${url}`} style={imageStyle}/>
    </div>
  )}