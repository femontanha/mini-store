angular.module('miniStore').controller('AddressController', function( $scope, $routeParams, addressRecurse, registerAddress){

  $scope.address = {};

  $scope.msg = '';

  // Getting Edit
  if( $routeParams.addressId ) {
    addressRecurse.get({ addressId: $routeParams.addressId }, function( data ){
      $scope.address = data;
    }, function( error ){
      $scope.msg = 'Bad';
      console.error(error);
    });
  }

  // Adding or Editing
  $scope.addAddress = function() {
    if( $scope.form.$valid ) {
      registerAddress.register($scope.address)
      .then(function( result ){
        $scope.msg = result.msg;
        if(result.add) $scope.address = {};
      }).catch(function(result){
        $scope.msg = result.msg;
      });
    }
  }

});
