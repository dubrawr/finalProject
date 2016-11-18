angular.module('myApp')
.config(function($httpProvider){
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
})
.controller('playlistController', ['$routeParams', '$scope', '$http', '$location', 'playlistService',
	function($routeParams, $scope, $http, $location, playlistService){
		$scope.playlistTitle = 'Click To Change Playlist Title';

var currentSong = [];
$scope.play = function(song){
  var nowPlaying = new Audio(song.preview_url);
  if (currentSong.length === 1){
    currentSong[0].pause();
    currentSong = [];
    currentSong.push(nowPlaying);
    nowPlaying.play();
  } else {
    currentSong.push(nowPlaying);
    nowPlaying.play();
  }
};

$scope.pause = function(){
	currentSong[0].pause();
};

		$scope.playlist = [];
		$scope.addSong = function(result){
			$scope.playlist.push(result);
			console.log($scope.playlist);
		};

		$scope.search = function(){
			$scope.searched = $scope.artistName;
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

		$scope.save = function(){
			console.log('hello')
			var data = {
				title: $scope.playlistTitle,
				songs: $scope.playlist,
				id: $routeParams.id
			};
			playlistService.save(data)
			.then(function(response){
				console.log(response);
			});
		};

		$scope.delete = function(song){
			console.log($scope.playlist.indexOf(song));
			var index = $scope.playlist.indexOf(song);
			if (index > -1){
				$scope.playlist.splice(index, 1);
			}
		};

}]);