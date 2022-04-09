import React, {useState} from "react";
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'

function LogIn({ setUser, setInApp }) {

  // handle button click
  function handleSubmit(e) {
    e.preventDefault();
    setInApp(true);
  }



  const paperStyle={padding :20, height:'70vh', width:'25%', margin: '20px auto'}
  const avatarStyle={backgroundColor:'skyblue'}
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>FM</Avatar>
          <h2>FitMatch</h2>
          <h3>Sign In:</h3>
        </Grid>
        <TextField
          onChange={(e) => setUser(e.target.value)}
          label='Username'
          placeholder='Enter Username...'
          fullWidth
          required />
        <Button
          onClick={(e)=>handleSubmit(e)}
          type="Submit"
          color="primary"
          variant="contained"
          fullWidth>Enter</Button>
      </Paper>
    </Grid>
  )
}

export default LogIn;