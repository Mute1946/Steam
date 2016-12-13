var mongoose = require('mongoose');

var StatsSchema = new mongoose.Schema({
	name: String,
	value: Number
});

mongoose.model('StatsData', StatsSchema, 'StatsData');

var AchivementSchema = new mongoose.Schema({
	name: String,
	achieved: Number
});

mongoose.model('AchievementData', AchivementSchema, 'AchievementData');

var PlayersStatsSchema = new mongoose.Schema({
	steamid: Number,
	gamename: String,
	stats: [StatsSchema],
	achievements: [AchivementSchema]
});

mongoose.model('GameData', PlayersStatsSchema, 'GameData');