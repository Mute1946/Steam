(function() {

    angular
        .module('steamApp')
        .controller('achievementCtrl', achievementCtrl);

    achievementCtrl.$inject = ['$scope', 'SelectedData', 'GameData'];

    function achievementCtrl($scope, SelectedData, GameData) {
        // Nasty IE9 redirect hack (not recommended)
        /*
        if (window.location.pathname !== '/') {
          window.location.href = '/#' + window.location.pathname;
        }*/
        var vm = this;
        console.log(window.location);

        vm.content = "Game Achievements";

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
            
            GameData.getAchievementDataForAchieved(vm.selectedAchievement.value)
                .success(function(data) {
                    
                    vm.achievementData = data;
                    console.log(vm.achievementData);
                })
                .error(function(e) {
                    console.log(e);
                });            
        };

    }

})();
