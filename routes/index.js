var express = require('express');
var router = express.Router();

var fs = require('fs');
var scanFolder = require('../lib/scanFolder');
var translate = require('../lib/translate');
var blockPath = './block';

/* GET home page. */
router.get('/', function(req, res, next) {
  var myArray = scanFolder(blockPath);
  var createData =[];
  myArray.forEach(function(item){
    var temp = translate(item.folder,item.fileName);
    createData.push(temp);
  })
  res.render('index', {data:createData });


});

module.exports = router;
