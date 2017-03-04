var productDB = require('../../config/product-db');
var addressDB = require('../../config/address-db');
var api = {};

api.addAddress = function(req, res) {
  addressDB.insert(req.body, function(err, newDoc) {
    if(err) return console.log(err);
    console.log('Added: ' + newDoc._id);
    console.log(newDoc);
    res.json(newDoc._id);
  });
};

api.updateAddress = function(req, res) {
  addressDB.update({_id : req.params.productId }, req.body, function(err, numReplaced) {
    if (err) return console.log(err);
    if(numReplaced) res.status(200).end();
    res.status(500).end();
    console.log('Updated: ' + req.body._id);
    res.status(200).end();
  });
};

api.listProducts = function(req, res) {
  productDB.find({}).sort({name: 1}).exec(function(err, doc) {
    if (err) return console.log(err);
    res.json(doc);
  });
};

api.listAddress = function(req, res) {
  addressDB.find({}).sort({name: 1}).exec(function(err, doc) {
    if (err) return console.log(err);
    res.json(doc);
  });
};

api.removeAddress = function(req, res) {
  addressDB.remove({ _id: req.params.productId }, {}, function (err, numRemoved) {
    if (err) return console.log(err);
    console.log('Removed');

    if(numRemoved) res.status(200).end();
    res.status(500).end();
  });
};

module.exports = api;
