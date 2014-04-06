
/*
 * Upload Form.
 */

var multiparty = require('multiparty'),
    fs = require('fs'),
    md5 = require('blueimp-md5').md5,
    im = require('easyimage');

exports.form = function(req, res){
  res.render('upload', {title: 'Upload'});
};

exports.process = function(req, res){
  var form = new multiparty.Form();

  form.parse(req, function(err, fields, files) {
      // Hash the email with md5 hash function
      var hashedEmail = md5(fields.email[0]).substring(0, 20); 

      fs.readFile(files.image[0].path, function(err, data) {
        if (err) throw err;
        var imageName = files.image[0].originalFilename;
        var uploadPath = "profile-image/" + hashedEmail;

        fs.writeFile(uploadPath, data, function(err) {
          if (err) throw err;
          im.rescrop(
            {
              src: uploadPath,
              dst: uploadPath + '.jpg',
              width: 100,
              height: '100^',
              cropwidth: 100,
              cropheight: 100,
              format: 'jpg',
              quality: 92, 
              x: 0,
              y: 0
            },
            function(err, image) {
              if (err) throw err;
              fs.unlink(uploadPath);
            } 
          ); 
          res.redirect('/profile-image/' + hashedEmail);
        });
      });
    });
};
