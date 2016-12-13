var mongoose = require('mongoose');

var SteamidSchema = new mongoose.Schema({
	steamid: Number
});

mongoose.model('SteamData', SteamidSchema, 'SteamData');