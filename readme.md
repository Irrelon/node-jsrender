# Node-JSRender
An actively maintained wrapper for the jsrender project by @borismoore (https://github.com/BorisMoore/jsrender). Uses latest source from the jsrender project and extends functionality for easy use in Node.js.

## Install
	npm install node-jsrender

## Usage

### Loading a Template From a String
```
// Require the node module
var jsrender = require('node-jsrender');

// Load a template from string
jsrender.loadString('#myTemplate', '{{:data}}');

// Render the template with data
jsrender.render['#myTemplate']({data: 'hello'});

// Output is: "hello"
```

### Loading a Template From a File (Synchronously)
```
// Require the node module
var jsrender = require('node-jsrender');

// Load a template from ./templates/myTemplate.html
//     Contents of ./templates/myTemplate.html is: "{{:data}}"
jsrender.loadFileSync('#myTemplate', './templates/myTemplate.html');

// Render the template with data
jsrender.render['#myTemplate']({data: 'hello'});

// Output is: "hello"
```

### Loading a Template From a File (Asynchronously)
```
// Require the node module
var jsrender = require('node-jsrender');

// Load a template from ./templates/myTemplate.html
//     Contents of ./templates/myTemplate.html is: "{{:data}}"
jsrender.loadFile('#myTemplate', './templates/myTemplate.html', function (err, template) {
	if (!err) {
		// Template was loaded
		// Render the template with data
		jsrender.render['#myTemplate']({data: 'hello'});
		
		// Output is: "hello"
	} else {
		throw(err);
	}
});
```

### Nested Templates

In jsrender, you can have templates that reference other templates, nested templates. But to work, you must register the nested templates before rending the parent template.

```
var jsrender = require('node-jsrender');
jsrender.loadString('list', '<ul>Grocery List</ul>{{for items tmpl="listItem" /}}</ul>');
jsrender.loadString('listItem', '<li>{{:name}}</li>');
jsrender.render['list']({items: [{name:'Carrots'}, {name: "Banana"}]});
```
