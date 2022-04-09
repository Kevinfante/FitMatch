import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import BuildIcon from '@mui/icons-material/Build';

function Navbar() {
  return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FitMatch
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to="/"><HomeOutlinedIcon /></Link>
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to="/build"><BuildIcon /></Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default Navbar



// export default function NavBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <Link to="/"><HomeOutlinedIcon /></Link>
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <Link to="/build"><BuildIcon /></Link>
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

// return(
//   <nav>
//     <Link to="/"><HomeOutlinedIcon /></Link>
//     <Link to="/add">Add</Link>
//     <Link to="/build">Build</Link>
//     <Link to="/Wardrobe">Wardrobe</Link>
//   </nav>
// )