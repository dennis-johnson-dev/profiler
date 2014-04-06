
/*
 * GET images page.
 */

var fs = require('fs');

exports.find = function(req, res){
  res.render('form', {title: 'Images'}); 
};

exports.response = function(req, res){
  res.sendfile("profile-image/" + req.params.image + ".jpg");
};
