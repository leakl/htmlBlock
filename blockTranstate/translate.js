/**
 * @param {String} url is part
 * @return {Object}
 * { title:[string], content:[string], css:[string] }
 * @version 0.1
 * @author By nick
 */
var fs = require('fs');
var less = require('less');
var translate = function(folder, filename){
    var data ={};
    _html = function(){
        var path = folder +'/'+filename+'.html';
        data.content=fs.readFileSync(path,'utf-8');
        var tempLess= data.content.replace(/\n|\r/g,'');
        var title =tempLess.match(/<\!--(.*)-->/);
        if(title){
            data.title= title[1];
        }
    }
    try {
        _html();
    }catch (err){};

    _lessToCss = function(){
        var path = folder +'/'+filename+'.less';
        var cssFile = fs.readFileSync(path,'utf-8');
        data.less =cssFile;
        less.render(cssFile, function (err, css) {
            if(err) throw 'less出错了';
            data.css ='<style type="text/css">'+css.css+'</style>';
        });

    }
    try {
        _lessToCss();
    }catch (err){};
    return data;
}
module.exports = translate;