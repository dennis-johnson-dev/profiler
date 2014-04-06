var assert = require('chai').assert;
var request = require('supertest');
var should = require('should');
var routes = require('../routes');
var upload = require('../routes/upload');
var image = require('../routes/image');
var api = require('../routes/api');

suite('Routes', function(){
  test("index route is defined", function(){
    assert.isDefined(routes.index);
  });

  test("find image route is defined", function(){
    assert.isDefined(image.find);
  });

  test("view image route is defined", function(){
    assert.isDefined(image.view);
  });

  test("process image route is defined", function(){
    assert.isDefined(image.process);
  });

  test("image response route is defined", function(){
    assert.isDefined(image.response);
  });

  test("api response route is defined", function(){
    assert.isDefined(api.response);
  });

  test("upload form route is defined", function(){
    assert.isDefined(upload.form);
  });

  test("upload process route is defined", function(){
    assert.isDefined(upload.process);
  });
 
});
