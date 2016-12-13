var express = require('express');
var router = express.Router();
var ctrlPlayerData = require('../controllers/player');
var ctrlSteamData = require('../controllers/steamid');

/* Steam ID Data */
router.get('/steamData', ctrlSteamData.steamDataReadOne);

/* Achievments Data */
router.get('/achievmentData/:achieved', ctrlPlayerData.achievementDataReadOne);
router.get('/achievementData', ctrlPlayerData.achievementDataReadAll);

/* Stats Data */
router.get('/statsData/:value', ctrlPlayerData.statsDataReadOne);
router.get('/statsData', ctrlPlayerData.statsDataReadAll);

/* Summary Data */
router.get('/playerData', ctrlPlayerData.playerDataReadAll);

module.exports = router;
