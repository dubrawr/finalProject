angular.module('myApp')
.factory('playlistService', ['$http', function($http){
  return {
    create: function(){
      return  $http({
       url: '/playlist',
       method: 'POST',
     });
    },
    list: function(){
      return $http({
        url: '/playlist',
        method: 'GET'
      });
    },
    save: function(data){
      return $http({
        method: 'POST',
        url: '/playlist/'+ data.id,
        data: data
      });
    }
  };
}]);