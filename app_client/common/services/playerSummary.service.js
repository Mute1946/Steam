(function() {

    angular
        .module('steamApp')
        .service('PlayerSummary', playerSummary);

    playerSummary.$inject = ['$http', 'KeyStore'];

    function playerSummary($http, KeyStore) {
        var getSummary = function(id) {

            KeyStore.getKeys()
                .success(function(data) {
                    var keys = data;
                    console.log(keys);
                    //f53f715588d39379ae80bc9bc045c885
                    var steamapikey = keys.STEAM_API_KEY;
                    return $http.jsonp('http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/' + steamapikey + '/' +
                        id + '', {
                    playerSummary: playerSummary
                        });
                })
                .error(function(e) {
                    console.log(e);
                });
        };
        
        //Path to get player summary from the Steam Web API
        var getSummary2 =  function(id){
            return $http.jsonp('http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/FAA7EB283835586C8A0F9E55C7D7346D/' +
                id + '', {
                    playerSummary: playerSummary
                });        
        }        

        return {
            getSummary: getSummary,
            getSummary2 : getSummary2
        };
    }
    
/*does not connect to the web api.  Does not show up on heroku
Heroku can't pull data from my mLab data*/

})();
