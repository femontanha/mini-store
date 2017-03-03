var db = require('../../config/database');
var api = {};

api.add = function(req, res) {
  db.insert(req.body, function(err, newDoc) {
    if(err) return console.log(err);
    console.log('Added: ' + newDoc._id);
    console.log(newDoc);
    res.json(newDoc._id);
  });
};

api.search = function(req, res) {
  db.findOne({_id: req.params.productId }, function(err, doc) {
    if (err) return console.log(err);
    res.json(doc);
  });
};

api.update = function(req, res) {
  db.update({_id : req.params.productId }, req.body, function(err, numReplaced) {
    if (err) return console.log(err);
    if(numReplaced) res.status(200).end();
    res.status(500).end();
    console.log('Updated: ' + req.body._id);
    res.status(200).end();
  });
};

api.list = function(req, res) {
  db.find({}).sort({name: 1}).exec(function(err, doc) {
    if (err) return console.log(err);
    res.json(doc);
  });
};

api.listForGroup = function(req, res) {
  var grupoId = parseInt(req.params.grupoId);
  db.find({grupo: grupoId}, function(err, doc) {
    if (err) return console.log(err);
    res.json(doc);
  });
};

api.remove = function(req, res) {
  db.remove({ _id: req.params.productId }, {}, function (err, numRemoved) {
    if (err) return console.log(err);
    console.log('Removed');

    if(numRemoved) res.status(200).end();
    res.status(500).end();
  });
};

module.exports = api;
