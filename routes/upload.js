
/*
 * Upload Form.
 */

var multiparty = require('multiparty'),
    fs = require('fs'),
    md5 = require('blueimp-md5').md5;

exports.form = function(req, res){
  res.render('upload', {title: 'Uploads'});
};

exports.process = function(req, res){
  var form = new multiparty.Form();

  form.parse(req, function(err, fields, files) {

      fs.readFile(files.image[0].path, function(err, data) {

        if (err) {
          res.send('Error'); 
        };

        var imageName = files.image[0].originalFilename;
        var uploadPath = "profile-images/" + imageName;

        fs.writeFile(uploadPath, data, function(err) {
          res.send(fields.email[0]);
        });
      });
  });
};
