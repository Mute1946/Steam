(function() {

    angular
        .module('steamApp')
        .service('SteamCommunity', steamcommunity);

    steamcommunity.$inject = ['$http', 'KeyStore'];

    function steamcommunity($http, KeyStore) {
        var getSteam = function(lat, lon) {

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
        
        var getWeather2 =  function(lat, lon){
            return $http.jsonp('https://api.darksky.net/forecast/f53f715588d39379ae80bc9bc045c885/' +
                lat + ',' + lon + "?callback=JSON_CALLBACK", {
                    jsonpCallbackParam: 'callback'
                });        
        }        

        return {
            getWeather: getWeather,
            getWeather2 : getWeather2
        };
    }
    


})();
