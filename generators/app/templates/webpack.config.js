// Common imports
var gulp = require('gulp'),
    pkg = require('../package.json'),
    environments = require('gulp-environments'),
    path = require('path');

// Require webpack utilities
var webpack = require('webpack');

// Config variables
var src = path.join(pkg.src.js, '**/*.{js,jsx}'),
    srcPath = path.join(process.cwd(), pkg.src.js),
    dest = path.join(process.cwd(), pkg.build.js);

// Babel loaders
var jsxLoaders = ['babel?presets[]=react,presets[]=es2015'];

if (environments.development()) {
    // Only hot load on dev
    jsxLoaders.push('webpack-module-hot-accept');
    jsxLoaders.unshift('react-hot');
}

var webpackSettings = {
    debug: environments.development(),
    entry: {
        app: ['webpack/hot/dev-server', 'webpack-hot-middleware/client', path.join(srcPath, 'app.jsx')],
        // Each additional bundle you require (e.g. index page js, or contact page js)
        // should be added here and referenced as a script tag in the corresponding template
        // index: [ 'webpack/hot/dev-server', 'webpack-hot-middleware/client', path.join(srcPath, 'app.jsx')],
    },
    output: {
        path: dest,
        publicPath: '/js/',
        filename: '[name].js'
    },
    plugins: environments.production() ? [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ] : [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', ]
    },
    module: {
        preLoaders: [{
            test: /\.jsx?/,
            loader: "eslint-loader",
            exclude: /(node_modules|bower_components)/
        }],
        loaders: [{
            test: /\.jsx?/,
            exclude: /(node_modules|bower_components)/,
            include: [srcPath],
            loaders: jsxLoaders,
        }],
    },
    eslint: {
        parserOptions: {
            ecmaVersion: 6,
            sourceType: 'module',
            ecmaFeatures: {
                jsx: true,
            }
        },
    rules: {
        semi: 2
    },
        extends: ['eslint:recommended', 'plugin:react/recommended'],
        plugins: [
            'react'
        ]
    }
};

if (environments.development()) {
    webpackSettings.devtool = "eval";
};

module.exports = webpackSettings;
