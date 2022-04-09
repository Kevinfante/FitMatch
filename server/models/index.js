const db = require('../db/index');


var getSpec = function(array, callback){
  var queryString = `SELECT * FROM aparrel WHERE color = ANY('{${array}}'::text[])`
  db.query(queryString, callback);
}


var get = function(callback){
  var queryString = `SELECT * FROM aparrel`
  db.query(queryString, callback);
}

var post = function(params, callback){
  console.log('params: ', params)
  var queryString = 'INSERT INTO aparrel (type, description, url, color) VALUES ($1, $2, $3, $4)'
  db.query(queryString, params, callback);
}

module.exports = { post, get, getSpec}
