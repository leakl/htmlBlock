/**
 * Created by jn on 2015/11/9.
 */
var fs = require('fs');
var FileStreamRotator = require('file-stream-rotator')
//var accessLogStream = fs.createWriteStream('./logs/aaa.txt')
var accessLogStream = FileStreamRotator.getStream({
    filename: './logs/log',
    frequency: 'daily',
    verbose: false
})

module.exports = accessLogStream;