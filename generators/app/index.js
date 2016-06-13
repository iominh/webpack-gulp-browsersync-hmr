var generators = require('yeoman-generator'),
    mergeJSON = require("merge-json");


var wpFilename = 'gulp/webpack.config.js',
    bsFilename = 'gulp/browserSync.js',
    jsxFilename = 'src/js/app.jsx';

/**
Main setup function
*/
module.exports = generators.Base.extend({
    initializing: function() {
        this.composeWith('jumpstart-static', { options: {
            exclude: [
                wpFilename,
                bsFilename,
                'src/js/app.js'
            ]
        }});
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

        // React module install
        this.npmInstall([
            'react',
            'react-dom',
        ], { 'save': true });
    },
    writing: function() {
        // Update the webpack.config.js and browserSync Gulp task
        this.log('Writing the Webpack config and BrowserSync settings');

        this.fs.copy(this.templatePath(wpFilename), this.destinationPath(wpFilename));
        this.fs.copy(this.templatePath(bsFilename), this.destinationPath(bsFilename));
        this.fs.copy(this.templatePath(jsxFilename), this.destinationPath(jsxFilename));

    }
});
