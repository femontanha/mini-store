var api   = require('../api');
var path  = require('path');

module.exports  = function(app) {

  app.route('/products')
    .post(api.add)
    .get(api.list);

  app.route('/products/:productId')
    .delete(api.remove)
    .get(api.search)
    .put(api.update);

  app.all('/*', function(req, res) {
    res.sendFile(path.resolve('public/index.html'));
  });
};
