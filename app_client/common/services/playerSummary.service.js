(function() {

    angular
        .module('steamApp')
        .service('PlayerSummary', playerSummary);

    playerSummary.$inject = ['$http', 'KeyStore'];

    function playerSummary($http, KeyStore) {
        var getSummary = function(steamid) {

            KeyStore.getKeys()
                .success(function(data) {
                    var keys = data;
                    console.log(keys);
                    //f53f715588d39379ae80bc9bc045c885
                    var steamapikey = keys.STEAM_API_KEY;
                    return $http.jsonp('http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/' + steamapikey + '/' +
                        steamid + "?callback=JSON_CALLBACK", {
                            jsonCallbackParam: 'callback'
                        });
                })
                .error(function(e) {
                    console.log(e);
                });
        };
        
        var getSummary2 =  function(steamid){
            return $http.jsonp('http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/FAA7EB283835586C8A0F9E55C7D7346D/' +
                steamid + '', {
                    playerSummary: playerSummary
                });        
        }        

        return {
            getSummary: getSummary,
            getSummary2 : getSummary2
        };
    }
    


})();
