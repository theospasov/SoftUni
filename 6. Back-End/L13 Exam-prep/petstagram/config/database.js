// This page handles the configuration of the Database
const mongoose = require('mongoose');

// TODO change database according to assignment
const connectionStr = 'mongodb://127.0.0.1:27017/softuni-exam-petstagram';

module.exports = async (app) => { // we export an Arrow function that receives an app, but we won't be using the app. We are only doing it to maintain the CONVENTION. The Services are those who will refer the Models
    try {
        await mongoose.connect(connectionStr, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database connected');
    } catch (err) {
        console.error('Database failed initialization')
        console.error(err.message)
        process.exit(1) // will kill the app and return an error code 1
    }



}