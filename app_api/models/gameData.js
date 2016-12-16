var mongoose = require('mongoose');

var StatsSchema = new mongoose.Schema({
	steamid: String,
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

var AchivementSchema = new mongoose.Schema({
	steamid: String,
	playgameeverymap: Number,
	getconsecutivekillsnodeaths: Number,
	medicrapidcharge: Number,
	medicassistheavylong: Number,
	pyrokillmultiweapons: Number,
	pyrokillspies: Number,
	pyroburnmedicscharged: Number,
	heavydefendmedic: Number
});

mongoose.model('AchievementData', AchivementSchema, 'AchievementData');

var SteamidSchema = new mongoose.Schema({
	steamid: String,
	game: String,
	stats: [StatsSchema],
	achievements: [AchivementSchema]
});

mongoose.model('GameData', SteamidSchema, 'GameData');