var Datastore = require('nedb');
var dbName = 'data.db';
var db;

if(!db) {
  db = new Datastore({
    filename: dbName, 
    autoload: true 
  });
  console.log('Database ' + dbName + ' ready')
}

module.exports = db;