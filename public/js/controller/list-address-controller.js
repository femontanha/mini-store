angular.module('miniStore').controller('ListAddressController', function( $scope, addressRecurse ) {

  $scope.address = [];
  $scope.msg = '';

  // Getting
  addressRecurse.query(function( address ){
    $scope.address = address;
  }, function( error ){
    console.error(error);
  });

});
