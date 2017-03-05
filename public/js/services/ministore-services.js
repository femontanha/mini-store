angular.module('ministoreServices', ['ngResource'])
.factory('productRecurse', function( $resource ){
  return $resource('products', null, {
    update: {
      method: 'PUT'
    }
  });
})
.factory('addressRecurse', function( $resource ){
  return $resource('address/:addressId', null, {
    update: {
      method: 'PUT'
    }
  });
})
.factory('registerAddress', function( addressRecurse, $q, $rootScope ){

  var service = {};

  service.register = function( address ) {
    return $q(function(resolve, reject){
      if(address._id) {
        addressRecurse.update({
          addressId: address._id
        }, address, function(){
          $rootScope.$broadcast('registerAddress');
          resolve({
            msg: 'Endereço atualizado com sucesso.',
            add: false
          });
        }, function( error ){
          console.error(error);
          reject({
            msg: 'Ocorreu algum erro e não foi atualizado.'
          });
        });
      } else {
        addressRecurse.save(address, function(){
          $rootScope.$broadcast('registerAddress');
          resolve({
            msg: 'Endereço foi adicionado com sucesso!',
            add: true
          });
        }, function( error ){
          reject({
            msg: 'Novo endereço não foi adicionado'
          });
        });
      }
    });
  };

  return service;

});
