const mongoose = require('mongoose');

async function connectMongo(url){
    return mongoose.connect(url).then(()=>console.log("MongoDB connected successfully!"));
}

module.exports = {connectMongo};