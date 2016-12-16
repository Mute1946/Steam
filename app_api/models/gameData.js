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

var AchivementSchema = new mongoose.Schema({
	id: Number,
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
	id: Number,
	stats: [StatsSchema],
	achievements: [AchivementSchema]
});

mongoose.model('SteamidData', SteamidSchema, 'SteamidData');