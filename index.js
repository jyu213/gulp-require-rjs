'use strict';

var es        = require('event-stream');
var fs        = require('fs');
var path      = require('path');
var requirejs = require('requirejs');

//node r.js -o baseUrl=. paths.jquery=some/other/jquery name=main out=main-built.js

/**
 * @description 对象扩展
 * @param {object} 原型对象
 * @param {object} 要继承的对象
 * @returns {boolean}
 */
function extend(){
  var args = [].slice.call(arguments);
  var source = args.shift() || {};

  if(!source) return false;

  for(var i = 0, l = args.length; i < l; i++){
    if(typeof args[i] === 'object'){
      for(var key in args[i]){
        source[key] = args[i][key];
      }
    }
  }
  return source;
}

module.exports = function (options) {
  /**
   * reset options
   */
  options.outUrl = options.outUrl || options.baseUrl;


  return es.mapSync(function (file, cb) {
      var destPath = path.join(file.cwd, options.baseUrl, path.basename(file.path));
      var stream = fs.createWriteStream(destPath, {flags: 'w'});
      stream.write(file.contents, '', function() {
        var name = path.basename(file.path).replace(path.extname(file.path), '');
        var outPath = path.join(options.outUrl, name + '.js');
        var cfg = extend({
          name:name, 
          out:outPath
        }, options);
        console.log("node r.js -o baseUrl=" + options.baseUrl + " name=" + name + " out=" + outPath);
        requirejs.optimize(cfg);
      });
      console.log('success!');
    });
};
