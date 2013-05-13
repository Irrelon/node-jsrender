// Augment the jsRender object with a new method
var jsRender = (function () {
	var fs = require('fs'),
		jsviews = require('jsrender/jsrender'),
		JsRender = function () {};
	
	JsRender.prototype.loadFileSync = function (name, path) {
		if (name) {
			if (path) {
				return this.loadString(name, String(fs.readFileSync(path, {encoding: 'utf8'})));
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
				
				jsviews.original[name] = String(str);
				
				return jsviews.templates(renderObj);
			} else {
				throw('Cannot loadString in jsRender if no template string (str) is passed: loadString(name, str);');
			}
		} else {
			throw('Cannot loadString in jsRender if no template name (name) is passed: loadString(name, str);');
		}
	};
	
	jsviews.original = jsviews.original || {};
	
	JsRender.prototype.render = jsviews.render;
	JsRender.prototype.original = jsviews.original;
	JsRender.prototype.helpers = jsviews.views.helpers;
	JsRender.prototype.jsviews = jsviews;
	
	return JsRender;
}());

module.exports = new jsRender();
