(function() {

    angular
        .module('steamApp')
        .service('SteamCommunity', steamcommunity);

    steamcommunity.$inject = ['$http', 'KeyStore'];

    function steamcommunity($http, KeyStore) {
        var getSteam = function(data) {

            KeyStore.getKeys()
                .success(function(data) {
                    var keys = data;
                    console.log(keys);
                    //FAA7EB283835586C8A0F9E55C7D7346D
                    var steamapikey = keys.STEAM_API_KEY;
                    return $http.jsonp('http://api.steampowered.com/ISteamUserStats/GetGlobalStatsForGame/v0001 ' + steamapikey + '/' +
                        "?callback=JSON_CALLBACK", {
                            jsonpCallbackParam: 'callback'
                        });
                })
                .error(function(e) {
                    console.log(e);
                });
        };

        return {
            getSteam: getSteam,
        };
    }
    


})();
