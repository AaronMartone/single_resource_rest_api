// Require express module and create app.
var express = require('express');
var app = express();

// Require mongoose and connect to mongodb.
var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'single_resource_rest_api');

// Handle db connect errors.
db.on('error', function() { throw new Error('Failed to connect to the database.'); });

// Handle db connect success.
db.once('open', function() {    
    
    // Load bus schema and create model. Get a list of buses and output as JSON.
    app.get('/bus', function(req, res) {
        var Bus = require('./models/Bus');

        Bus.find({}, function(err, data) {
            if (err) { console.error(err); throw new Error('Error getting bus list.'); }
            console.log(data);
            res.set('Content-Type', 'application/json')
                .status(200)
                .json(data);
        });
        
    });

    // Start server.
    var server = app.listen(3000, 'localhost', function() {
    console.log(server.address());
        var host = server.address().address;
        var port = server.address().port;

        console.log('Application listening at http://%s:%s', host, port);
    });
});

// Connect to the database.
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/single_resource_rest_api');