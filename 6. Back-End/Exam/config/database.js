const mongoose = require('mongoose');

const connectionStr = 'mongodb://127.0.0.1:27017/exam-friendly-world';

module.exports = async (app) => { 
    try {
        await mongoose.connect(connectionStr, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database connected');
    } catch (err) {
        console.error('Database failed initialization')
        console.error(err.message)
        process.exit(1) 
    }

}