var mongoose = require('mongoose');
var SteamidData = mongoose.model('SteamidData');

//utility method for the module
var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(content);
};

/* GET all SteamIDData records */
module.exports.steamidDataReadOne = function(req, res)
{
  console.log("Finding SteamID Data Record", req);
  
  SteamidData
    .find({})
    .exec(function(err, steamData){
      if(err){
        console.log(err);
        sendJSONresponse(res, 404, err);
      }
      console.log(steamData);
      sendJSONresponse(res, 200, steamData);
    });
};