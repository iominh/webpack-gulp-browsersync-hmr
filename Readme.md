# Jumpstart ~ React
A [**Yeoman**](http://yeoman.io/) generator for scaffolding modern static sites using Webpack, SCSS, Browser-sync, Gulp, Swig and React

## Requirements
 - [Yo](http://yeoman.io/learning/)
 - [Gulp-cli](https://github.com/gulpjs/gulp-cli)
 - [Bower](http://bower.io/)
 - [Node & npm](http://nodejs.org/)
 - [Jumpstart Static](https://github.com/max-barry/generator-jumpstart-static)


## Getting started
This generator adds React and JSX support to [Jumpstart Static](https://github.com/max-barry/generator-jumpstart-static). Make sure you have Jumpstart Static installed before running this generator, because NPM no longer installs `peerDependencies` automatically.
`npm install generator-jumpstart-static generator-jumpstart-react -g`

Run the generator using Yeoman. Simply run `yo` and select from the Yeoman wizard, or `yo jumpstart-react` to launch the generator directly.

Jumpstart React will naturally encounter conflicts as it looks to overwrite some of the files created by Jumpstart Static (e.g. `webpack.config.js`). Enter `Y` to force, or `a` to force through all conflicts.

**n.b. Remember that if you're running the generator on an existing prject, your `webpack.config.js` and `browserSync.js` will be overwritten**


## More information
To understand the Gulp commands now available in your project, read the [Jumpstart Static documentation here](https://github.com/max-barry/generator-jumpstart-static).
