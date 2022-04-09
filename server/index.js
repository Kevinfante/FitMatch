const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const controller = require('./controllers');

//make sure that you are using middleware for parsing post data
//.urlencoded for normal structures
//.json for nested structures
//app.use(express.urlencoded({extended:true}));

app.use(express.json({extended:true}));

app.use(express.static('client/dist'));

app.get('/api/weather', controller.getWeather)

app.get('/api/all/colors', controller.getAllSpecific)

app.get('/api/all', controller.getAll)

app.post('/api/add', controller.add)

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})