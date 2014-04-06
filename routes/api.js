
/*
 * GET api page.
 */

var Image = require('../models/Image.js');

exports.response = function(req, res){
  // If valid email exists, return with json, otherwise issue an error
  console.log(req.url);
  Image.find({hash: req.params.hemail}, function(err, documents){
    if (documents.length != 0) {
      console.log(documents[0]);
      res.jsonp({path: 'http://songawee-profiler.herokuapp.com' + documents[0].path});
    } else {
      res.render('not-found', {title: 'Not Found'});
    }
  });
};
