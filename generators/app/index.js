var generators = require('yeoman-generator'),
    mergeJSON = require("merge-json");

/**
Main setup function
*/
module.exports = generators.Base.extend({
    initializing: function() {
        this.composeWith('jumpstart-static', {});
    },
    prompting: function(){
        // TODO : Warn the person this will delete their webpack.config.js. Offer option to backup
    },
    writing: function() {
    },
    install: function() {

        this.log('Installing development and React dependencies');

        // Webpack and Babel dev dependencies
        this.npmInstall([
            'webpack-module-hot-accept',
            'webpack-dev-middleware',
            'webpack-dev-server',
            'webpack-hot-middleware',
            'react-hot-loader',
            'eslint-plugin-react',
            'eslint-loader',
            'eslint',
            'babel-preset-react',
            'babel-preset-es2015',
            'babel-loader',
        ], { 'saveDev': true });

        // Re
        this.npmInstall([
            'react',
            'react-dom',
        ], { 'save': true });
    },
    end: function() {
        // Update the webpack.config.js and browserSync Gulp task

        this.log('Overwriting the Webpack config and BrowserSync settings');

        var wpFilename = 'gulp/webpack.config.js',
            bsFilename = 'gulp/browserSync.js';

        // 1. Delete existing files
        this.fs.delete(this.destinationPath(wpFilename));
        this.fs.delete(this.destinationPath(bsFilename));

        // 2. Copy in new files
        this.fs.copy(this.templatePath(wpFilename), this.destinationPath(wpFilename));
        this.fs.copy(this.templatePath(bsFilename), this.destinationPath(bsFilename));

        // Rename app.js file to app.jsx
        var jsPath = this.destinationPath('src/js/app.js');
        if ( this.fs.exists(jsPath)) {
            this.fs.move(jsPath, this.destinationPath('src/js/app.jsx'));
        }
    }
});
