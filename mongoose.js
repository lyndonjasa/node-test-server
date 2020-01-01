const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://donjasa:d0nJasa0716@cluster0-t0jef.mongodb.net/vue-project', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
}, function(err) {
    if(err) {
        console.log('Some problem with the connection ' +err);
    } else {
        console.log('The Mongoose connection is ready');
    }
});