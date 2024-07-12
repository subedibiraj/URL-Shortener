const express = require('express');
const app = express();
const urlRouter = require('./routes/url');
const staticRouter = require('./routes/staticRouter');
const userRouter = require('./routes/user');
const {connectMongo} = require('./connection');
const path = require('path');
const PORT = 8001;
require('dotenv').config();

connectMongo(process.env.MONGO_URI);

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/url', urlRouter);
app.use('/', staticRouter);
app.use('/user',userRouter);


app.listen(PORT, ()=>{
    console.log(`Server started at port http://localhost:${PORT}`);
})
