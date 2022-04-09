const model = require('../models')
const util = require('../util')

//console.log('model.get: ', model.get)


var getAllSpecific = function(req, res) {
  // console.log('getspec controller')
  // console.log('query: ', req.query.combos)
  matches = req.query.combos
  model.getSpec( matches, (err, result) => {
    if (err) {
      console.log(err)
      res.status(500).send();
    } else {
      res.status(201).send(result.rows)
    }
  })
}

var getAll = function(req, res) {
  // console.log('controller get all')
  model.get( (err, result) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(201).send(result.rows)
    }
  })
}


var getWeather = function(req, res) {
  // console.log('controller get all')
  util.getWeather((err, result) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(201).send(result.data)
    }
  })
}

var add = function(req, res) {
  // console.log('controller')
  var params = { ...req.body }
  let dataArray = [params.type, params.description, params.url, params.color]
  model.post(dataArray, (err, result) => {
    if (err) {
      console.log(err)
      res.status(501).send(err);
    } else{
      res.status(201).send()
    }
  })
}



// var create = function(req, res) {
//   var params = [req.body.movie]
  // model.post(params, (err, result) => {
  //   if (err) {
  //     res.status(501).send();
  //   } else{
  //     res.status(201).send()
  //     //console.log(result)
  //   }
  // })
// }

module.exports = { getAll, add, getAllSpecific, getWeather}