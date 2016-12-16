(function() {

  angular
    .module('steamApp')
    .controller('gameCtrl', gameCtrl);

  gameCtrl.$inject = ['$scope', 'GameData', 'SteamidData', 'SelectedData'];

  function gameCtrl($scope, GameData, SteamidData, SelectedData) {
    // Nasty IE9 redirect hack (not recommended)
    /*
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + window.location.pathname;
    }*/
    
    var vm = this;
    console.log(window.location);    
    
    vm.content = "Game Data";
    
    vm.selectedSteamID = "";
    vm.selectedAchievement = "";
    vm.selectedStat = "";
    
    //check selected Steam ID
    if(SelectedData.selectedSteamID !== null){
      vm.selectedSteamID = SelectedData.selectedSteamID;
    }
    
    //check selected Achievement
    if(SelectedData.selectedAchievement !== null){
      vm.selectedAchievement = SelectedData.selectedAchievement;
    }
    
    //check selected Stat
    if(SelectedData.selectedStat !== null){
      vm.selectedStat = SelectedData.selectedStat;
    }    

    vm.getSteamidData = function() {
      SteamidData.getSteamids()
        .success(function(data) {
          vm.steamidData = data;
          console.log(vm.steamidData);
        })
        .error(function(e) {
          console.log(e);
        });
    };

    vm.getAchivementData = function() {
      GameData.getAchievementData()
        .success(function(data) {
          vm.achievementData = data;
          console.log(vm.achievementData);
        })
        .error(function(e) {
          console.log(e);
        });
    };
    
    vm.getStatsData = function() {
      GameData.getStatsData()
        .success(function(data) {
          vm.statsData = data;
          console.log(vm.statsData);
        })
        .error(function(e) {
          console.log(e);
        });
    };

    vm.toggleMenu = function() {
      if (vm.class === "toggled") {
        vm.class = "";
      }
      else {
        vm.class = "toggled";
      }
      console.log(vm.class + " is good");
    };
    
    vm.clearSelectedData = function(){
      
      vm.selectedSteamID = null;
      vm.selectedAchievement = null;
      vm.selectedStat = null;
    };
    
    //saved steamid
    $scope.$watch(
      function(){
        return vm.selectedSteamID;    
      }, 
      function (newValue, oldValue) {
        console.log(oldValue);
        console.log(newValue);
        if (newValue.steamid !== oldValue.steamid){
          SelectedData.selectedSteamID = newValue;
        } 
      }, 
      true
    );
    
    //saved achievement
    $scope.$watch(
      function(){
        return vm.selectedAchievement;
      }, 
      function (newValue, oldValue) {
        console.log(oldValue);
        console.log(newValue);
        if (newValue.achievement !== oldValue.achievement){
          SelectedData.selectedAchievement = newValue;
        } 
      }, 
      true
    );
    
    //saved stat
    $scope.$watch(
      function(){
        return vm.selectedStat;
      }, 
      function (newValue, oldValue) {
        console.log(oldValue);
        console.log(newValue);
        if (newValue.stat !== oldValue.stat){
          SelectedData.selectedStat = newValue;
        } 
      }, 
      true
    );    

    //call services
    vm.getSteamidData();
    vm.getAchivementData();
    vm.getStatsData();

  }

})();
