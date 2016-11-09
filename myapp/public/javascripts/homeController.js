angular.module('myApp').controller('homeController', ['$scope', function($scope){
	$scope.login = false;
	$scope.register = false;

	$scope.showLogin = function (){
		$scope.login = true;
		$scope.register = false;
	};

	$scope.showRegister = function(){
		$scope.login = false;
		$scope.register = true;
	};
}]);