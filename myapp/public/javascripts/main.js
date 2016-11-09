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
	});
});







