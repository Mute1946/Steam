(function() {

  angular
    .module('steamApp')
    .service('gameData', steamData()Data);

  steamData()Data.$inject = ['$http'];
  function steamData ($http) {
    var getSteamId = function () {
      return $http.get('/api/steamData');
    };

    var getAchievementforAchieved = function (achieved) {
      return $http.get('/api/achievementData' + achieved);
    };

    var getStatsDataForValue = function (value) {
      return $http.post('/api/statData' + value);
    };

    return {
      getSteamId: getSteamData,
      getAchievementforAchieved : getAchievementforAchieved,
      getStatsDataForValue : getStatsDataForValue
      };
  }

})();