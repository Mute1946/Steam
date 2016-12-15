(function() {

  angular
    .module('steamApp')
    .service('playerData', playerData);

  playerData.$inject = ['$http'];
  function playerData ($http) {
      var getPlayerSummaries = function(){
          return $http.get('/api/playerData');
      };

      return {
          getPlayerSummaries : getPlayerSummaries(),
      };
  }

})();