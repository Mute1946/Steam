(function() {

  angular
    .module('steamApp')
    .service('playerData', playerData);

  playerData.$inject = ['$http'];
  function playerData ($http) {
      var getPlayerSummary = function(){
          return $http.get('/api/playerData');
      };

      return {
          getPlayerSummary : getPlayerSummary,
      };
  }

})();