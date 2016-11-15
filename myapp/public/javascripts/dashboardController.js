angular.module('myApp').controller('dashboardController', ['$scope', '$http', '$location',
  function ($scope, $http, $location) {
    $scope.loggedIn = false;
  	$scope.createPlaylist = function(){
  		$http({
  			url: '/playlist/playlist',
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
        url: '/playlist',
        method: 'GET'
      }).then(function(response){
        console.log(response.data);
        $scope.playlists = response.data;
      });
    };

    $scope.display = function(playlist){
      $scope.title = playlist.title;
      $scope.songlist = [];
      $scope.songlist = playlist.songs; 
      console.log($scope.songlist);
    };


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


    $scope.showPlaylists();

}]);