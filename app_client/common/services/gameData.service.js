(function() {

  angular
    .module('steamApp')
    .service('steamData', gameData());

  gameData().$inject = ['$http'];
  
  function gameData ($http) {
    var getSteamID = function () {
      return $http.get('/api/steamData');
    };

    var getAchievementforAchieved = function (achieved) {
      return $http.get('/api/achievementData' + achieved);
    };

    var getStatsDataForValue = function (value) {
      return $http.post('/api/statData' + value);
    };

    return {
      getSteamID: getSteamID,
      getAchievementforAchieved : getAchievementforAchieved,
      getStatsDataForValue : getStatsDataForValue
      };
  }

})();