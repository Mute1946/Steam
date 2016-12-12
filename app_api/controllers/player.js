var mongoose = require('mongoose');
var AchievementData = mongoose.model('AchievementData');
var StatsData = mongoose.model('StatsData');
var PlayerData = mongoose.model('PlayerData');


//utility method for the module
var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
}

/* GET all AchievementData records */
module.exports.achievementsDataReadAll = function(req, res) {
    console.log("Finding all Achievement Data Records", req);

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
}

/* GET AchievementData by Achievement */
module.exports.achievementDataReadOne = function(req, res) {
    console.log('Finding Achievement Data Record', req.params);
    if (req.params && req.params.weight) {
        AchievementData
            .find({
                achievement: req.params.achievement
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

/* GET StatsData by stat */
module.exports.statsDataReadOne = function(req, res) {
    console.log('Finding Stats Data Record', req.params);
    if (req.params && req.params.weight) {
        StatsData
            .find({
                stat: req.params.stat,
            })
            .exec(function(err, statsData) {
                if (!statsData) {
                    sendJSONresponse(res, 404, {
                        "message": "Stat was not found"
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
        console.log('No stat was specified');
        sendJSONresponse(res, 404, {
            "message": "No stat was in request"
        });
    }
};