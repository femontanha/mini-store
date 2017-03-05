var api   = require('../api');
var path  = require('path');

module.exports  = function(app) {

  app.route('/products')
    .get(api.listProducts);

  app.route('/address')
    .post(api.addAddress)
    .get(api.listAddress);

  app.route('/address/:addressId')
    .get(api.searchAddress)
    .delete(api.removeAddress)
    .put(api.updateAddress);

  app.all('/*', function(req, res) {
    res.sendFile(path.resolve('public/index.html'));
  });
};
