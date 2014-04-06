
/*
 * GET images page.
 */

var fs = require('fs'),
    md5 = require('blueimp-md5').md5;

exports.find = function(req, res){
  res.render('find', {title: 'Images'}); 
};

exports.process = function(req, res){
  var hashedEmail = md5(req.body.email);
  res.render('found', {title: 'Profiler', hash: hashedEmail})
};

exports.response = function(req, res){
  res.sendfile("profile-image/" + req.params.image + ".jpg");
};
