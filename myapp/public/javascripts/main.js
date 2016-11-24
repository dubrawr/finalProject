var myApp = angular.module('myApp', ['ngRoute', 'ui.sortable']);

myApp.config(function ($routeProvider){
$routeProvider
	.when('/', {
		templateUrl: '/dashboard.html',
		controller: 'dashboardController',
    access: {restricted: true}
	})
	.when('/login', {
      templateUrl: '/login.html',
      controller: 'loginController',
      access: {restricted: false}
    })
    .when('/logout', {
      controller: 'logoutController',
      access: {restricted: true}
    })
    .when('/register', {
      templateUrl: '/register.html',
      controller: 'registerController',
      access: {restricted: false}
    })
    .when('/playlist/:id/edit', {
      templateUrl: '/create.html',
      controller: 'playlistController',
      access: {restricted: false}
    })
    .when('/playlist:/id', {
      templateUrl: '/playlist.html',
      controller: 'playlistController',
      access: {restricted: false}
    })
    .otherwise({
      redirectTo: '/'
    });
});

myApp.run(function ($rootScope, $location, $route, AuthService) {
  $rootScope.$on('$routeChangeStart',
    function (event, next, current) {
      if (next.access.restricted && !AuthService.isLoggedIn()){
        AuthService.getUserStatus()
        .catch(function(response){
          $location.path('/login');
          $route.reload();
          
        });  
      }
    });
});







