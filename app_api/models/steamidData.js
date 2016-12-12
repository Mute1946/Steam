var mongoose = require('mongoose');

var SteamidSchema = new mongoose.Schema({
	steamid: Number
});

mongoose.model('SteamidData', SteamidSchema, 'SteamidData');