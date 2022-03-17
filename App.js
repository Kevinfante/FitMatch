import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom';
import './App.css';
import Home from './Pages/home'
import Add from './Pages/add'
import Build from './Pages/build'
import Wardrobe from './Pages/wardrobe'

function App() {
  const [inApp, setInApp] = useState(false);
  const [user, setUser] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home
          inApp={inApp}
          setInApp ={setInApp}
          user={user}
          setUser={setUser} />} />
        <Route path="/add" element = {<Add />} />
        <Route path="/build" element = {<Build />} />
        <Route path="/Wardrobe" element = {<Wardrobe />} />
      </Routes>
    </Router>
  );
}

export default App;
