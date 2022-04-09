import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom';
import Home from './pages/home.jsx';
import Add from './pages/add.jsx';
import Build from './pages/build.jsx';
import Wardrobe from './pages/wardrobe.jsx';
import comboObject from '../data/comboObj.jsx'
import axios from 'axios';

function App() {
  const [inApp, setInApp] = useState(false);
  const [currColor, setCurrColor] = useState(null);
  const [tops, setTops] = useState(null);
  const [outerWear, setOuterWear] = useState(null);
  const [sweater, setSweater] = useState(null);
  const [bottoms, setBottoms] =  useState(null);
  const [shoes, setShoes] = useState(null);
  const [favorites, setFavorites] = useState(null);
  const [weather, setWeather] = useState({});
  const [user, setUser] = useState('');
  const [outfit, setOutfit] = useState([])


  useEffect (()=> {
    axios.get('/api/weather')
      .then((res)=>{
        setWeather(res.data)
      })
  },[])

  useEffect(() => {
    let topsArray = [];
    let outerWearArray = [];
    let sweaterArray = [];
    let bottomsArray = [];
    let shoesArray = [];
    if (currColor) {
      console.log('color: ', currColor)
      let matches = comboObject[currColor]
      // let params = {combos: matches}
      axios.get(`/api/all/colors?combos=${matches}`)
      .then((res) => {
        for (var i= 0; i<res.data.length; i++){
          if (res.data[i].type === 'top') {
            topsArray.push(res.data[i])
          } else if (res.data[i].type === 'footwear'){
            shoesArray.push(res.data[i])
          }else if (res.data[i].type === 'outerWear'){
            outerWearArray.push(res.data[i])
          }else if (res.data[i].type === 'bottoms'){
            bottomsArray.push(res.data[i])
          }else if (res.data[i].type === 'sweater'){
            sweaterArray.push(res.data[i])
          }
        }
        setBottoms(bottomsArray)
        setShoes(shoesArray)
        setTops(topsArray)
        setOuterWear(outerWearArray)
        setSweater(sweaterArray);

      })
    } else{
      axios.get(`/api/all`)
      .then((res) => {
        for (var i= 0; i<res.data.length; i++){
          if (res.data[i].type === 'top') {
            topsArray.push(res.data[i])
          } else if (res.data[i].type === 'footwear'){
            shoesArray.push(res.data[i])
          }else if (res.data[i].type === 'outerWear'){
            outerWearArray.push(res.data[i])
          }else if (res.data[i].type === 'bottoms'){
            bottomsArray.push(res.data[i])
          }else if (res.data[i].type === 'sweater'){
            sweaterArray.push(res.data[i])
          }
        }
        setBottoms(bottomsArray)
        setShoes(shoesArray)
        setTops(topsArray)
        setOuterWear(outerWearArray)
        setSweater(sweaterArray);

      })
      // .catch((err) => {
      //   console.log('err');
      // });
    }
  }, [currColor]);

  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home
          inApp={inApp}
          setInApp ={setInApp}
          user={user}
          setUser={setUser}
          weather={weather}
          tops={tops}
          outerWear={outerWear}
          sweater={sweater}
          weather={weather}
          setCurrColor = {setCurrColor}
          currColor = {currColor}
          outfit = {outfit}
          setOutfit={setOutfit}/>} />
        <Route path="/add" element = {<Add />} />
        <Route path="/build" element = {<Build
          setCurrColor = {setCurrColor}
          currColor = {currColor}
          outfit = {outfit}
          setOutfit={setOutfit}
          tops={tops}
          outerWear={outerWear}
          sweater={sweater}
          bottoms={bottoms}
          shoes={shoes}
          />} />
        <Route path="/Wardrobe" element = {<Wardrobe />} />
      </Routes>
    </Router>
  );
}

export default App;
