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
   // this is where the magic happens.
    $(nowPlaying).on('ended', function(){
    var i = $scope.playlist.indexOf(song);
    i++;
    $scope.play($scope.playlist[i]);

    
    console.log('ended');
  });
};

$scope.pause = function(){
  currentSong[0].pause();
};

$scope.next = function(){
  console.log(currentSong[0].src);
  var current = currentSong[0].src;
  var result = $scope.playlist.filter(function(song){
    return song.preview_url == current;
  });
  console.log(result);
  var next = $scope.playlist.indexOf(result[0]);
  console.log(next);
  next++;
  $scope.play($scope.playlist[next]);
};

$scope.back = function(){
  var current = currentSong[0].src;
  var result = $scope.playlist.filter(function(song){
    return song.preview_url == current;
  });
  console.log(result);
  var previous = $scope.playlist.indexOf(result[0]);
  console.log(previous);
  previous--;
  $scope.play($scope.playlist[previous]);
};

$scope.playAll = function(){
	if (currentSong.length === 1){
    currentSong[0].play();
  } else {
	var firstSong = $scope.playlist[0];
	console.log(firstSong);
	$scope.play(firstSong);
	}
};


 }]);