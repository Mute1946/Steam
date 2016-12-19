var mongoose = require('mongoose');
var AchievementData = mongoose.model('AchievementData');
var StatsData = mongoose.model('StatsData');

//utility method for the module
var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

/* GET all AchievementData records */
module.exports.achievementDataReadAll = function(req, res) {
    console.log('Finding all Achievement Data Records', req);

    AchievementData
        .find({})
        .exec(function(err, achievementData) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
            }
            console.log(achievementData);
            sendJSONresponse(res, 200, achievementData);
        });
};

/* GET AchievementData by Steam ID */
module.exports.achievementDataReadOne = function(req, res) {
    console.log('Finding Steam ID Record', req.params);
    if (req.params && req.params.steamid) {
        AchievementData
            .find({
                id: req.params.id
            })
            .exec(function(err, achievementData) {
                if (!achievementData) {
                    sendJSONresponse(res, 404, {
                        "message": "Achievement was not found"
                    });
                    return;
                }
                else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(achievementData);
                sendJSONresponse(res, 200, achievementData);
            });
    }
    else {
        console.log('No achievement was specified');
        sendJSONresponse(res, 404, {
            "message": "No achievement was in request"
        });
    }
};

/* GET all StatsData records */
module.exports.statsDataReadAll = function(req, res) {
    console.log('Finding all Stats Data Records', req);

    StatsData
        .find({})
        .exec(function(err, statsData) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
            }
            console.log(statsData);
            sendJSONresponse(res, 200, statsData);
        });
};


/* GET StatsData by Steam ID */
module.exports.statsDataReadOne = function(req, res) {
    console.log('Finding Steam ID Record', req.params);
    if (req.params && req.params.steamid) {
        StatsData
            .find({
                id: req.params.id
            })
            .exec(function(err, statsData) {
                if (!statsData) {
                    sendJSONresponse(res, 404, {
                        "message": "stat value not found"
                    });
                    return;
                }
                else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(statsData);
                sendJSONresponse(res, 200, statsData);
            });
    }
    else {
        console.log('No stat data specified');
        sendJSONresponse(res, 404, {
            "message": "No stat in request"
        });
    }
};