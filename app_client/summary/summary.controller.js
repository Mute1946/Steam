(function() {

    angular
        .module('steamApp')
        .controller('playerSummaryCtrl', playerSummaryCtrl);

    playerSummaryCtrl.$inject = ['$scope', 'SelectedData', 'PlayerSummary'];

    function playerSummaryCtrl($scope, SelectedData, PlayerSummary) {
        // Nasty IE9 redirect hack (not recommended)
        /*
        if (window.location.pathname !== '/') {
          window.location.href = '/#' + window.location.pathname;
        }*/
        var vm = this;
        console.log(window.location);

        vm.content = "Player Summary";

        vm.selectedSteamID = "";
        vm.selectedAchievement = "";
        vm.selectedSt = "";

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

        vm.getPlayerSummary = function() {
            
            var steamid = vm.selectedSteamID.steamid;
            console.log(steamid);
            
            PlayerSummary.getSummary2(steamid)
                .success(function(data) {
                    vm.playerSummary = data;
                    console.log(vm.PlayerSummary);
                })
                .error(function(e) {
                    console.log(e);
                });
        }
        
        //call services
        vm.getPlayerSummary();

    }

})();
