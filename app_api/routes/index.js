var express = require('express');
var router = express.Router();
var ctrlGameData = require('../controllers/game');
var ctrlPlayerData = require('../controllers/player');
var ctrlSteamData = require('../controllers/steamid');

/* Steam ID Data */
router.get('/steamidData', ctrlSteamData.steamidReadOne);

/* Achievments Data */
router.get('/achievmentData/:achievement', ctrlPlayerData.achievementDataReadOne);
router.get('/achievementData', ctrlPlayerData.achievementDataReadAll);

/* Stats Data */
router.get('/statsData/:stats', ctrlPlayerData.statsDataReadOne);
router.get('/statsData', ctrlPlayerData.statsDataReadAll);

/* Summary Data */
router.get('/summaryData', ctrlPlayerData.summaryDataReadAll);

module.exports = router;
