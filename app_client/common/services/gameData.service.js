(function() {

  angular
    .module('steamApp')
    .service('steamidData', gameData());

  gameData().$inject = ['$http'];
  
  function gameData ($http) {
    var getSteamidData = function () {
      return $http.get('/api/steamidData');
    };

    var getAchievementDataForSteamId = function (steamid) {
      return $http.get('/api/achievements/' + steamid);
    };

    var getStatsDataForSteamId = function (steamid) {
      return $http.post('/api/stats/' + steamid);
    };

    return {
      getSteamidData: getSteamidData,
      getAchievementDataForSteamId : getAchievementDataForSteamId,
      getStatsDataForSteamId : getStatsDataForSteamId
      };
  }

})();