
/*
 * GET images page.
 */

var fs = require('fs');

exports.response = function(req, res){
  res.sendfile("profile-image/" + req.params.image + ".jpg");
};

exports.find = function(req, res){

};
