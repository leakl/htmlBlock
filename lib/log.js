/**
 * Created by jn on 2015/11/9.
 */
var fs = require('fs');
var FileStreamRotator = require('file-stream-rotator')
var moment = require('moment');
var fileName =moment().format("YYYY-MM-DD")
//var accessLogStream = fs.createWriteStream('./logs/aaa.txt')
var accessLogStream = FileStreamRotator.getStream({
    filename: './logs' + '/'+fileName+'.log',
    //frequency: 'daily',
    verbose: false
})

module.exports = accessLogStream;