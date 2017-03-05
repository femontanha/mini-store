angular.module('miniStore', ['ngRoute', 'ministoreServices'])
.config(function( $routeProvider, $locationProvider ){

  $locationProvider.html5Mode(true);

  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'ListProductController'
  });

  $routeProvider.when('/enderecos', {
    templateUrl: 'views/addressList.html',
    controller: 'ListAddressController'
  });

  $routeProvider.when('/endereco/novo', {
    templateUrl: 'views/address.html',
    controller: 'AddressController'
  });

  $routeProvider.when('/endereco/editar/:enderecoId', {
    templateUrl: 'views/address.html',
    controller: 'AddressController'
  });

  $routeProvider.when('/profile', {
    templateUrl: 'views/home.html',
    controller: 'ListProductController'
  });

  $routeProvider.otherwise({
    redirectTo: '/'
  });
});
