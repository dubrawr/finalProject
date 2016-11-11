angular.module('myApp')
.config(function($httpProvider){
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
})
.controller('playlistController', ['$routeParams', '$scope', '$http', '$location',
	function($routeParams, $scope, $http, $location){


		$scope.search = function(){
			var url = "https://api.spotify.com/v1/search";
			var params = {
				type: 'artist',
				q: $scope.artistName,
				key: "a27e704d5d39416fbf9170ad339a2cdd"
			};
			$http({
				method: 'GET',
				url: url, 
				params: params
			}).then(function(response){
				console.log(response);
			});
		};



	}]);