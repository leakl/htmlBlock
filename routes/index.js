var express = require('express');
var router = express.Router();

var fs = require('fs');
var scanFolder = require('../blockTranstate/scanFolder');
var translate = require('../blockTranstate/translate');
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


  // 检查 session 中的 isVisit 字段
  // 如果存在则增加一次，否则为 session 设置 isVisit 字段，并初始化为 1。
  if(req.session.isVisit) {
    req.session.isVisit++;
    res.send('<p>第 ' + req.session.isVisit + '次来此页面</p>');
  } else {
    req.session.isVisit = 1;
    res.send("欢迎第一次来这里");
    console.log(req.session);
  }
});

module.exports = router;
