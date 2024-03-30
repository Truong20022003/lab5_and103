const mongoose = require('mongoose');

const local = "mongodb+srv://truong1:Bf6KlJpJnhWh7f1t@cluster0.drtagx5.mongodb.net/";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
