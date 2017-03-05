angular.module('miniStore').controller('ListAddressController', function( $scope, addressRecurse ) {

  $scope.address = [];
  $scope.msg = '';

  // Getting
  addressRecurse.query(function( address ){
    $scope.address = address;
  }, function( error ){
    console.error(error);
  });

  // Removing
  $scope.removeAddress = function( address ) {
    addressRecurse.delete({ addressId: address._id }, function(){
      var current_index = $scope.address.indexOf(address);
      $scope.address.splice(current_index, 1);
      $scope.msg = 'Endereço deletado com sucesso';
    }, function( error ){
      console.error(error);
    });
  }

});
