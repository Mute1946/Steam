var mongoose = require('mongoose');

var StatsSchema = new mongoose.Schema({
	id: Number,
	scoutaccumibuildingsdestroyed: Number,
	scoutaccumidamagedealt: Number,
	scoutaccumiplaytime: Number,
	soldieraccumibuildingsdestroyed: Number,
	soldieraccumidamagedealt: Number,
	soldieraccumiplaytime: Number,
	medicaccumibuildingsdetroyed: Number,
	medicaccumidamagedealt: Number,
	medicaccumiplaytime: Number
});

mongoose.model('StatsData', StatsSchema, 'StatsData');

var AchievementSchema = new mongoose.Schema({
	id: Number,
	playgameeverymap: String,
	getconsecutivekillsnodeaths: String,
	medicrapidcharge: String,
	medicassistheavylong: String,
	pyrokillmultiweapons: String,
	pyrokillspies: String,
	pyroburnmedicscharged: String,
	heavydefendmedic: String
});

mongoose.model('AchievementData', AchievementSchema, 'AchievementData');

var SteamidSchema = new mongoose.Schema({
	id: Number,
	stats: [StatsSchema],
	achievements: [AchievementSchema]
});

mongoose.model('SteamidData', SteamidSchema, 'SteamidData');