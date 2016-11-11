angular.module('myApp').controller('dashboardController', ['$scope', '$http', '$location',
  function ($scope, $http, $location) {

  	$scope.createPlaylist = function(){
  		$http({
  			url: '/user/playlist',
  			method: 'POST',
  		}).then(function(response){
  			console.log(response);
  			$location.path('/playlist/' + response.data._id + '/edit');
  		});
  	};



}]);