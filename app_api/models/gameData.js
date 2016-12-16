var mongoose = require('mongoose');

var StatsSchema = new mongoose.Schema({
	stat: String,
	steamid: Number,
	value: Number
});

mongoose.model('StatsData', StatsSchema, 'StatsData');

var AchivementSchema = new mongoose.Schema({
	achievement: String,
	steamid: Number,
	achieved: Number
});

mongoose.model('AchievementData', AchivementSchema, 'AchievementData');

var SteamidSchema = new mongoose.Schema({
	steamid: Number,
	gamename: String,
	stats: [StatsSchema],
	achievements: [AchivementSchema]
});

mongoose.model('GameData', SteamidSchema, 'GameData');