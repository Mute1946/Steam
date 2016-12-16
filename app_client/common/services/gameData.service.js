(function() {

  angular
    .module('steamApp')
    .service('steamidData', gameData());

  gameData().$inject = ['$http'];
  
  function gameData ($http) {
    var getSteamidData = function () {
      return $http.get('/api/steamidData');
    };

    var getAchievementData = function () {
      return $http.get('/api/achievements');
    };

    var getStatsData = function () {
      return $http.post('/api/stats');
    };

    return {
      getSteamidData: getSteamidData,
      getAchievementData : getAchievementData,
      getStatsData : getStatsData
      };
  }

})();