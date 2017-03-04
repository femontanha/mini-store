angular.module('miniStore').controller('ListProductController', function( $scope, productRecurse ) {

  $scope.product = [];
  
  // Getting
  productRecurse.query(function(products){
    $scope.product = products;
  }, function( error ){
    console.error(error);
  });

});
