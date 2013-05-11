// Augment the jsRender object with a new method
var jsRender = (function () {
	var fs = require('fs'),
		jsviews = require('jsrender/jsrender'),
		JsRender = function () {};
	
	JsRender.prototype.loadFileSync = function (name, path) {
		if (name) {
			if (path) {
				return this.loadString(name, String(fs.readFileSync('../../site/default/index.html', {encoding: 'utf8'})));
			} else {
				throw('Cannot loadFile in jsRender if no path is passed: loadFileSync(name, path);');
			}
		} else {
			throw('Cannot loadFile in jsRender if no name is passed: loadFileSync(name, path);');
		}
	};
	
	JsRender.prototype.loadString = function (name, str) {
		if (name) {
			if (str) {
				var renderObj = {};
					renderObj[name] = str;
				
				return jsviews.templates(renderObj);
			} else {
				throw('Cannot loadFile in jsRender if no path is passed: loadFileSync(name, path);');
			}
		} else {
			throw('Cannot loadFile in jsRender if no name is passed: loadFileSync(name, path);');
		}
	};
	
	JsRender.prototype.render = jsviews.render;
	
	return JsRender;
}());

module.exports = new jsRender();