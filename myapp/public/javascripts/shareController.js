angular.module('myApp')
.controller('shareController', ['$routeParams', '$scope', '$location', 'playlistService',
  function ($routeParams, $scope, $location, playlistService) {

  	$scope.shared = function(){
	console.log('shared is firing');
	var data = {id: $routeParams.id};
	playlistService.share(data).then(function(response){
		console.log(response.data);
		$scope.title = response.data[0].title;
		$scope.playlist = response.data[0].songs;
		console.log($scope.playlist);
	});
};

  }]);