var mongoose = require('mongoose');

var SteamidSchema = new mongoose.Schema({
	id: Number
});

mongoose.model('SteamidData', SteamidSchema, 'SteamidData');