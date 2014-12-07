generator-webpack-frontend
==========================
Simple [Yeoman](http://yeoman.io) generator wielding [Webpack](http://webpack.github.io/), [ReactJs](http://facebook.github.io/react/), and [Sass](http://sass-lang.com).

## File Structure

> ├── client/		 
> │   ├── bundle.js (_built with webpack_) 	 
> │   ├── index.html	
> │   ├── components/		
> │   └── stylesheets/		
> ├── package.json	 
> └── webpack.config.js

## Getting Started

To install generator-webpack-frontend from npm, run:

```bash
npm install -g generator-webpack-frontend
```


Then, to use:

```bash
yo webpack-frontend
```

> You can optionally skip the npm & bower install with the `--skip-install` flag.

## Add Component

```bash		
yo webpack-frontend:component NewComponent
```

_...generates..._

__client/components/NewComponent.jsx__

	/**
	* @jsx React.DOM
	*/

	var React = require('react');
	require('../stylesheets/NewComponent.scss');
	
	var NewComponent = React.createClass({
		render: function() {
			return (
				<div className="NewComponent"></div>
			);
		}
	});
	
	module.exports = NewComponent;

_...and..._

__client/stylesheets/NewComponent.scss__

	.NewComponent {
		/* SCSS */
	}

## Building
Use webpack to build. Watches for changes with ```-w```.

```bash
webpack -w
```

> Builds to /client/bundle.js by default.


## License

MIT
