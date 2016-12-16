var mongoose = require('mongoose');
var PlayerData = mongoose.model('PlayerData');

//utility method for the module
var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(content);
};

/* GET all PlayerData records */
module.exports.playerDataReadAll = function(req, res) {
    console.log('Finding all Summary Data Records', req);

    PlayerData
        .find({})
        .exec(function(err, playerData) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
            }
            console.log(playerData);
            sendJSONresponse(res, 200, playerData);
        });
};