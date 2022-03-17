// import React from 'react';
// import { Paper, Button } from '@mui/material'
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Item({ url }){

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="450px"
        image={`/images/${url}`}
        alt="clothes"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          this is a description
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

//   return(
//   <Paper>
//    <img src={`/images/${url}`} />
//    <Button className="CheckButton">
//    Check it out!
//    </Button>
//  </Paper>
//  )
// }

export default Item;


//    <Paper style={card}>
//    <img src={`/images/${tee.url}`} style={image}/>
//    <Button className="CheckButton">
//    Check it out!
//    </Button>
//  </Paper>
//  )