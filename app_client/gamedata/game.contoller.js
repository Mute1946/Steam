(function() {

  angular
    .module('steamApp')
    .controller('gameCtrl', gameCtrl);

  gameCtrl.$inject = ['$scope', 'GameData', 'SteamData', 'SelectedData'];

  function gameCtrl($scope, GameData, SteamData, SelectedData) {
    // Nasty IE9 redirect hack (not recommended)
    /*
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + window.location.pathname;
    }*/
    console.log(window.location);    
    
    
    var vm = this;
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

    vm.getSteamData = function() {
      SteamData.get()
        .success(function(data) {
          vm.steamid = data;
          console.log(vm.steamid);
        })
        .error(function(e) {
          console.log(e);
        });
    };

    vm.getAchivementData = function() {
      GameData.getGameData()
        .success(function(data) {
          vm.gameData = data;
          console.log(vm.gameData);
        })
        .error(function(e) {
          console.log(e);
        });
    };
    
    vm.getStatsData = function() {
      GameData.getGameData()
        .success(function(data) {
          vm.gameData = data;
          console.log(vm.gameData);
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
        if (newValue.name !== oldValue.name){
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
        if (newValue.name !== oldValue.name){
          SelectedData.selectedStat = newValue;
        } 
      }, 
      true
    );    

    //call services
    vm.getSteamData();
    vm.getGameData();

  }

})();
