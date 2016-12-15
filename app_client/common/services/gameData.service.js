(function() {

  angular
    .module('steamApp')
    .service('steamData', steamData());

  steamData().$inject = ['$http'];
  function steamData ($http) {
    var getSteamData = function () {
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