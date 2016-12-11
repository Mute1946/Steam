(function () {

  angular
    .module('steamApp')
    .controller('homeCtrl', homeCtrl);

  homeCtrl.$inject = ['$scope', 'SelectedData'];
  function homeCtrl ($scope, SelectedData) {
    // Nasty IE9 redirect hack (not recommended)
    /*
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + window.location.pathname;
    }*/
    
    var vm = this;
    console.log(window.location);
    
    vm.content = "Player Data";
    
    vm.selectedSteamID = "";
    vm.selectedAchievement = "";
    vm.selectedStat = "";
    
    //check selected SteamID
    if(SelectedData.selectedSteamID !== null){
      vm.selectedSteamID = SelectedData.selectedSteamID;
    }
    
    //check selected Achievement
    if(SelectedData.selectedAchievement!== null){
      vm.selectedAchievement = SelectedData.selectedAchievement;
    }
    
    //check selected Stat
    if(SelectedData.selectedStat !== null){
      vm.selectedStat = SelectedData.selectedStat;
    }      
  }

})();