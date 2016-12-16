var mongoose = require('mongoose');

var StatsSchema = new mongoose.Schema({
	stat: String,
	steamid: String,
	value: Number
});

mongoose.model('StatsData', StatsSchema, 'StatsData');

var AchivementSchema = new mongoose.Schema({
	achievement: String,
	steamid: String,
	achieved: Number
});

mongoose.model('AchievementData', AchivementSchema, 'AchievementData');

var SteamidSchema = new mongoose.Schema({
	steamid: String,
	game: String,
	stats: [StatsSchema],
	achievements: [AchivementSchema]
});

mongoose.model('GameData', SteamidSchema, 'GameData');