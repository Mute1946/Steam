(function() {

  angular
    .module('steamApp')
    .service('SteamidData', steamidData);

  steamidData.$inject = ['$http'];
  function steamidData ($http) {
      var getSteamids = function(){
          return $http.get('/api/steamidData');
      }

      return {
          getSteamids : getSteamids,
      };
  }

})();