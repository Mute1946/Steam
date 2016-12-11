var mongoose = require('mongoose');

var PlayerSummarySchema = new mongoose.Schema({
	steamid: Number,
	personaname: String,
	lastlogoff: Number,
	profileurl: String,
	personastate: Number,
	realname: String,
	countrycode: String,
	statecode: String
});

mongoose.model('PlayerData', PlayerSummarySchema, 'PlayerData');