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
    },
    delete: function(data){
      return $http({
        method: 'DELETE',
        url: '/playlist/' + data.id,
        data: data
      });
    },
    share: function(data){
      return $http({
        method: 'GET',
        url: '/playlist/' + data.id,
        data: data
      });
    }
  };
}]);