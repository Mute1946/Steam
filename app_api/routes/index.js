var express = require('express');
var router = express.Router();
//var ctrlPlayerData = require('../controllers/player');
var ctrlSteamidData = require('../controllers/steamid');
var ctrlGameData = require('../controllers/game');

/* Steam ID Data */
router.get('/steamidData', ctrlSteamidData.steamidDataReadOne);

/* Achievments Data */
router.get('/achievmentData/:steamid', ctrlGameData.achievementsDataReadOne);
router.get('/achievementData', ctrlGameData.achievementsDataReadAll);

/* Stats Data */
router.get('/statsData/:steamid', ctrlGameData.statsDataReadOne);
router.get('/statsData', ctrlGameData.statsDataReadAll);

/* Summary Data */
//router.get('/playerData', ctrlPlayerData.playerDataReadAll);

module.exports = router;
