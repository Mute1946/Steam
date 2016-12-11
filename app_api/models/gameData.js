var mongoose = require('mongoose');

var StatsSchema = new mongoose.Schema({
	statname: String,
	statcount: Number
});

var AchivementSchema = new mongoose.Schema({
	achievementname: String,
	achieved: Number
});

var PlayersStatsSchema = new mongoose.Schema({
	steamid: Number,
	gamename: String,
	stats: [StatsSchema],
	achieved: [AchivementSchema]
});

mongoose.model('GameData', PlayersStatsSchema, 'GameData');