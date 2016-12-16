(function() {

  angular
    .module('steamApp')
    .service('steamidData', gameData());

  gameData().$inject = ['$http'];
  
  function gameData ($http) {
    var getSteamidData = function () {
      return $http.get('/api/steamidData');
    };

    var getAchievementDataForSteamId = function (id) {
      return $http.get('/api/achievements/' + id);
    };

    var getStatsDataForSteamId = function (id) {
      return $http.post('/api/stats/' + id);
    };

    return {
      getSteamidData: getSteamidData,
      getAchievementDataForSteamId : getAchievementDataForSteamId,
      getStatsDataForSteamId : getStatsDataForSteamId
      };
  }

})();