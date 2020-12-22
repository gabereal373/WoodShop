var express = require('express');
var path = require('path');
var mongodb = require('mongodb');
var bodyParser = require('body-parser');


var dbb = mongodb.MongoClient.connect('mongodb://localhost:27017');                  //connects to database

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));                         //serve static content


//handler for Form Post
app.post('/contact-us', function (req, res) {
    dbb.then(function(db) {
        delete req.body._id; // for safety reasons
        db.collection('woodshop').insertOne(req.body);
    });    
    res.send('Data received:\n' + JSON.stringify(req.body));
});

//handler for data view
app.get('/view-feedbacks',  function(req, res) {
    dbb.then(function(db) {
        db.collection('woodshop').find({}).toArray().then(function(feedbacks) {
            res.status(200).json(feedbacks);
        });
    });
});

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );






g










