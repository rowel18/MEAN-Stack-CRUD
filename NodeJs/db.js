const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mean', (err) => {
    if (!err) {
        console.log('MongoDB Connection Successful!');
    } 
    else {
        console.log('Error in MongoDB Connection: ' + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongoose;