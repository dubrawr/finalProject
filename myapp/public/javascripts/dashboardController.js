angular.module('myApp')
.controller('dashboardController', ['$scope', '$location', 'playlistService',
  function ($scope, $location, playlistService) {
    $scope.loggedIn = false;
    $scope.createPlaylist = function(){
      playlistService.create()
      .then(function(response){
       console.log(response);
       $location.path('/playlist/' + response.data._id + '/edit');
     });
   };

$scope.showPlaylists = function(){
  playlistService.list()
  .then(function(response){
    console.log(response.data);
    $scope.playlists = response.data;
  });
};

$scope.deletePlaylist = function(){
  var x = confirm("Are you sure you want to delete?");
  if (x){
  var data = {
    id: $scope.id
  };
  console.log(data.id);
  playlistService.delete(data)
  .then(function(response){
    console.log('deleted');
    $('#myModal').modal('toggle');
    $scope.showPlaylists();
  });
} else { return false;}
};

$scope.display = function(playlist){
  $scope.id = playlist._id;
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
$scope.pause = function(){
  currentSong[0].pause();
};


$scope.showPlaylists();


}]);