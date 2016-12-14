var mongoose = require('mongoose');
var SteamData = mongoose.model('SteamData');

//utility method for the module
var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(content);
};

/* GET all SteamIDData records */
module.exports.SteamDataReadOne = function(req, res)
{
  console.log("Finding SteamID Data Record", req);
  
  SteamData
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