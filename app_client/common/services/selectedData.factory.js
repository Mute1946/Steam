(function() {

  angular
    .module('steamApp')
    .factory('SelectedData', selectedData);

  //selectedData.$inject = ['$http'];
  function selectedData () {
      return {
          selectedSteamID : '',
          selectedAchievement : '',
          selectedStat : ''
      };
  }

})();