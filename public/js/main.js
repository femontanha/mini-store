angular.module('miniStore', ['ngRoute'])
.config(function( $routeProvider, $locationProvider ){

  $locationProvider.html5Mode(true);

  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'ListProductController'
  });

  $routeProvider.otherwise({
    redirectTo: '/'
  });
});
