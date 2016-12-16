(function() {

  angular
    .module('steamApp')
    .service('steamData', gameData());

  gameData().$inject = ['$http'];
  
  function gameData ($http) {
    var getSteamidData = function () {
      return $http.get('/api/steamData');
    };

    var getAchievementforAchieved = function (achieved) {
      return $http.get('/api/achievementData' + achieved);
    };

    var getStatsDataForValue = function (value) {
      return $http.post('/api/statsData' + value);
    };

    return {
      getSteamidData: getSteamidData,
      getAchievementforAchieved : getAchievementforAchieved,
      getStatsDataForValue : getStatsDataForValue
      };
  }

})();