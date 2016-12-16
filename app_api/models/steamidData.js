var mongoose = require('mongoose');

var SteamidSchema = new mongoose.Schema({
	id: String
});

mongoose.model('GameData', SteamidSchema, 'GameData');