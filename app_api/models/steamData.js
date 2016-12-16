var mongoose = require('mongoose');

var SteamidSchema = new mongoose.Schema({
	steamid: String,
    game: String
});

mongoose.model('SteamidData', SteamidSchema, 'SteamidData');