angular.module('myApp')
.config(function($httpProvider){
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
})
.controller('playlistController', ['$routeParams', '$scope', '$http', '$location', 	function($routeParams, $scope, $http, $location){

		$scope.playSnippet = function(){

		};

		$scope.addSong = function(){
			var url = "https://api.spotify.com/v1/tracks/";
	
		};

		$scope.search = function(){
			var url = "https://api.spotify.com/v1/search";
			var params = {
				type: 'artist' && 'track',
				q: $scope.artistName,
				key: "a27e704d5d39416fbf9170ad339a2cdd"
			};
			$http({
				method: 'GET',
				url: url, 
				params: params
			}).then(function(response){
				console.log(response);
				console.log(response.data.tracks.items[0].artists[0].name);
				console.log(response.data.tracks.items[0].name);
				$scope.artistName = '';
				$scope.results = response.data.tracks.items;
			});


		};



	}]);