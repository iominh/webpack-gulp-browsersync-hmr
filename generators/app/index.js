var generators = require("yeoman-generator");

/**
Main setup function
*/
module.exports = generators.Base.extend({
    scaffoldFolders: function() {
    },
    writing: function() {
    },
    install: function() {
        this.log("Installing dependencies");

        // Install Node packages
        this.npmInstall();

    },
    end: function() {
    }
});
