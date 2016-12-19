var express = require('express');
var router = express.Router();
//var ctrlPlayerData = require('../controllers/player');
var ctrlSteamidData = require('../controllers/steamid');
var ctrlGameData = require('../controllers/game');

/* Steam ID Data */
router.get('/steamidData', ctrlSteamidData.steamidDataReadOne);

/* Achievements Data */
router.get('/achievementData/:id', ctrlGameData.achievementDataReadOne);
router.get('/achievementData', ctrlGameData.achievementDataReadAll);

/* Stats Data */
router.get('/statsData/:id', ctrlGameData.statsDataReadOne);
router.get('/statsData', ctrlGameData.statsDataReadAll);

/* Summary Data */
//router.get('/playerData', ctrlPlayerData.playerDataReadAll);

module.exports = router;
