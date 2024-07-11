const express = require('express');
const app = express();
const urlRouter = require('./routes/url')
const {connectMongo} = require('./connection');
const PORT = 8001;
require('dotenv').config();

connectMongo(process.env.MONGO_URI);

app.use(express.json());


app.use('/url', urlRouter);


app.listen(PORT, ()=>{
    console.log(`Server started at port http://localhost:${PORT}`);
})
