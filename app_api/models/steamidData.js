var mongoose = require('mongoose');

// changed id name
var SteamidSchema = new mongoose.Schema({
	id: Number
});

mongoose.model('GameData', SteamidSchema, 'GameData');