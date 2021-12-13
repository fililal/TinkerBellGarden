let mongoose = require('mongoose');

const mongodb_url = 'mongodb://localhost:27017/User'

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect(mongodb_url, {useNewUrlParser: true})
            .then(() => {
                console.log("User database connection successfully!");
            })
            .catch(err => {
                console.log("User database connection error!");
            })
    }
}

module.exports = new Database();