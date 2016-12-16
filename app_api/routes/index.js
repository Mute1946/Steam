var express = require('express');
var router = express.Router();
//var ctrlPlayerData = require('../controllers/player');
var ctrlSteamData = require('../controllers/steamid');
var ctrlGameData = require('../contollers/game');

/* Steam ID Data */
router.get('/steamidData', ctrlSteamData.steamDataReadOne);

/* Achievments Data */
router.get('/achievmentData/:achieved', ctrlGameData.achievementDataReadOne);
router.get('/achievementData', ctrlGameData.achievementDataReadAll);

/* Stats Data */
router.get('/statsData/:value', ctrlGameData.statsDataReadOne);
router.get('/statsData', ctrlGameData.statsDataReadAll);

/* Summary Data */
//router.get('/playerData', ctrlPlayerData.playerDataReadAll);

module.exports = router;
