var Datastore = require('nedb');
var dbName = 'product.db';
var productDB;

if(!productDB) {
  productDB = new Datastore({
    filename: dbName,
    autoload: true
  });
  console.log('Database ' + dbName + ' ready')
}

module.exports = productDB;
