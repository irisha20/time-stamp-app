const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const timeStampRoutes = express.Router();
const PORT = 4000;



let TStamp = require('./timestamp.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/timeStampDB', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

//get data from DB route
timeStampRoutes.route('/').get(function(req, res) {
    TStamp.find(function(err, timestamps) {
        if (err) {
            console.log(err);
        } else {
            res.json({express: timestamps});
          
                  
        }
    });
    
});




//add timestamp route
timeStampRoutes.route('/add').post(function(req, res) {
    const timestamp = new TStamp(req.body);
        timestamp.save()
        .then(timestamp => {
            res.status(200).json({'timestamp': 'timestamp added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new timestamp failed');
        });
});





app.use('/timestamp', timeStampRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});