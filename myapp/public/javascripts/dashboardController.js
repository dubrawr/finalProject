angular.module('myApp').controller('dashboardController', ['$scope', '$http', '$location',
  function ($scope, $http, $location) {
    $scope.loggedIn = false;
  	$scope.createPlaylist = function(){
  		$http({
  			url: '/user/playlist',
  			method: 'POST',
  		}).then(function(response){
  			console.log(response);
  			$location.path('/playlist/' + response.data._id + '/edit');
  		});
  	};

// for some reason this doesn't work the first time
// only after i create a playlist first
    $scope.showPlaylists = function(){
      $http({
        url: '/user/playlist',
        method: 'GET'
      }).then(function(response){
        console.log(response.data);
        $scope.playlists = response.data;
        $scope.loggedIn = true;
      });
    };

}]);