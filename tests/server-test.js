var chai = require('chai');
var chaiHTTP = require('chai-http');
chai.use(chaiHTTP);

var expect = chai.expect;

describe('MongoDB', function() {
    var mongoose = require('mongoose');

    it('should be disconnected', function(done) {
        var mongoStatus = mongoose.connection.readyState;
        expect(mongoStatus).to.eql(0); // 'disconnected'
        done();
    });

    it('should be able to connect to the database', function(done) {
        var db = mongoose.createConnection('localhost', 'single_resource_rest_api');
        mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/single_resource_rest_api');
        db.once('open', function() {
            expect(mongoose.connection.readyState).to.be.within(1,2); // 'connected' or 'connecting'
            done();
        });
    });
});

describe('Application', function() {
    it('should respond with JSON', function(done) {
        chai.request('http://localhost:3000')
            .get('/bus')
            .end(function(err, res) {
                expect(res.status).to.eql(200);
                expect(res.get('Content-Type')).to.contain('application/json');
                done();
            });
    });
});