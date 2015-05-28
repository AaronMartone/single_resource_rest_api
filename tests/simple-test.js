'use strict';

// import core modules/methods.
var expect = require('chai').expect;
var updater = require('../app/assets/js/updater');

describe('Updater', function() {
    it ('should return application description', function(done) {
        expect(updater()).to.eql('The most REST-tacular Notes App Known to Mankind');
        done();
    });
});