var Datastore = require('nedb');
var dbName = 'address.db';
var addressDB;

if(!addressDB) {
  addressDB = new Datastore({
    filename: dbName,
    autoload: true
  });
  console.log('Database ' + dbName + ' ready')
}

module.exports = addressDB;
