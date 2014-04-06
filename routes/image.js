
/*
 * GET images page.
 */

var fs = require('fs');

exports.find = function(req, res){
  res.render('form', {title: 'Images'}); 
};

exports.process = function(req, res){
  res.render('found', {title: 'Profile'})
};

exports.response = function(req, res){
  res.sendfile("profile-image/" + req.params.image + ".jpg");
};
