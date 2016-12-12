(function() {

  angular
    .module('steamApp')
    .controller('steamidCtrl', steamidCtrl);

  airportCtrl.$inject = ['$scope', 'SteamIDData', 'PlayerData', 'SelectedData'];

  function airportCtrl($scope, SteamIDData, PlayerData, SelectedData) {
    // Nasty IE9 redirect hack (not recommended)
    /*
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + window.location.pathname;
    }*/
    console.log(window.location);    
    
    
    var vm = this;
    vm.content = "SteamiD Data";
    vm.selectedSteamID = "";
    vm.selectedAchievement = "";
    vm.selectedStat = "";
    
    //check selected SteamID
    if(SelectedData.selectedSteamID !== null){
      vm.selectedSteamID = SelectedData.selectedSteamID;
    }
    
    //check selected Achievement
    if(SelectedData.selectedAchievement !== null){
      vm.selectedAchievement = SelectedData.selectedAchievement;
    }
    
    //check selected Stats
    if(SelectedData.selectedStat !== null){
      vm.selectedStat = SelectedData.selectedStat;
    }    

    vm.getAirportData = function() {
      AirportData.getAirports()
        .success(function(data) {
          vm.airports = data;
          console.log(vm.airports);
        })
        .error(function(e) {
          console.log(e);
        });
    }

    vm.getClimbData = function() {
      AirplaneData.getClimbData()
        .success(function(data) {
          vm.climbData = data;
          console.log(vm.climbData);
        })
        .error(function(e) {
          console.log(e);
        });
    }

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
      
      vm.selectedArrivalICAO = null;
      vm.selectedDepartureICAO = null;
      vm.selectedWeight = null;
    }
    
    //saved departure
    $scope.$watch(
      function(){
        return vm.selectedDepartureICAO;    
      }, 
      function (newValue, oldValue) {
        console.log(oldValue);
        console.log(newValue);
        if (newValue.icao !== oldValue.icao){
          SelectedData.selectedDepartureICAO = newValue;
        } 
      }, 
      true
    );
    
    //saved arrival
    $scope.$watch(
      function(){
        return vm.selectedArrivalICAO;
      }, 
      function (newValue, oldValue) {
        console.log(oldValue);
        console.log(newValue);
        if (newValue.icao !== oldValue.icao){
          SelectedData.selectedArrivalICAO = newValue;
        } 
      }, 
      true
    );
    
    //saved weight
    $scope.$watch(
      function(){
        return vm.selectedWeight;
      }, 
      function (newValue, oldValue) {
        console.log(oldValue);
        console.log(newValue);
        if (newValue.weight !== oldValue.weight){
          SelectedData.selectedWeight = newValue;
        } 
      }, 
      true
    );    

    //call services
    vm.getAirportData();
    vm.getClimbData();

  }

})();
