
/**
 * @param {string} path is part
 * @param {string} fileType 文件后缀名
 * @return {Array}
 * @author By nick
 */
//@formatter:off.
var fs = require('fs');
var scanFolder = function (path) {
    var fileType, fileList, folderList, reg;
    fileType = 'html';
    fileList = [];
    folderList = [];
    reg = new RegExp('\.' + fileType + '$');
    var walk = function (path, fileList, folderList) {
        var files = fs.readdirSync(path,'utf8');
        files.forEach (function (item) {
            var tmpPath = path + '/' + item,
                stats = fs.statSync (tmpPath);
            if (stats.isDirectory ()) {
                walk(tmpPath, fileList, folderList);
                pushFile(tmpPath, item);
            } else {
                pushFile(tmpPath, item);
            }
        });
    };

    function pushFile(tmpPath, item) {
        if (reg.test(item)) {
            var data = {};
            var _reg = RegExp('\.' + fileType);
            data.fileName = item.replace(_reg, '');
            var _reg2 = RegExp('\/' + data.fileName + '\.' + fileType);
            data.folder = tmpPath.replace(_reg2, '');
            data.path = tmpPath.replace ('\.\/\/', '');
            fileList.push (data);
        }
    }

    walk(path, fileList, folderList);
    return fileList;
}
//@formatter:on.
module.exports = scanFolder;


