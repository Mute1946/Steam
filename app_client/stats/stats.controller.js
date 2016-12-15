(function() {

    angular
        .module('steamApp')
        .controller('statCtrl', statCtrl);

    statCtrl.$inject = ['$scope', 'SelectedData', 'GameData'];

    function statCtrl($scope, SelectedData, GameData) {
        // Nasty IE9 redirect hack (not recommended)
        /*
        if (window.location.pathname !== '/') {
          window.location.href = '/#' + window.location.pathname;
        }*/
        var vm = this;
        console.log(window.location);

        vm.content = "Game Stats";

        vm.selectedSteamID = "";
        vm.selectedAchievement = "";
        vm.selectedStat = "";

        //check selected Steam ID
        if (SelectedData.selectedSteamID !== null) {
            vm.selectedSteamID = SelectedData.selectedSteamID;
        }

        //check selected Achievement
        if (SelectedData.selectedAchievement !== null) {
            vm.selectedAchievement = SelectedData.selectedAchievement;
        }

        //check selected Stat
        if (SelectedData.selectedStat !== null) {
            vm.selectedStat = SelectedData.selectedStat;
        }

        vm.getStatsDataForValue = function() {
            
            GameData.getStatsDataForValue(vm.selectedStat.value)
                .success(function(data) {
                    //since find may select many, just return the single object
                    vm.statsData = data;
                    console.log(vm.statsData);
                })
                .error(function(e) {
                    console.log(e);
                });            
        };

    }

})();
