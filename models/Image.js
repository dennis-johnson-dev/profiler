var mongoose = require('mongoose');

var mongoUri = process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/profiler';
 
mongoose.connect(mongoUri, function (err, res) {
  if (err) {
    console.log('Error connect to: ' + mongoUri + '. ' + err);
  } else {
    console.log('Succeeded and connected to: ' + mongoUri);
  }
});

var schema = new mongoose.Schema({
  email: String,
  hash: String
});

module.exports = mongoose.model('Image', schema);
