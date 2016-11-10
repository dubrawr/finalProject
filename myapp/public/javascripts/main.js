var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider){
$routeProvider
	.when('/', {
		templateUrl: '/home.html',
		controller: 'homeController'
	})
	.when('/dashboard', {
		templateUrl: '/dashboard.html',
		controller: 'dashboardController'
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
});







