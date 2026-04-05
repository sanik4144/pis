const express = require('express');
const app = express();
const productHandler = require('./routerHandler/productHandler');
const userHandler = require('./routerHandler/userHandler');
const connectDB = require('./config/db');

connectDB;

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('hello');
})

app.use('/pis', productHandler);
app.use('/pisuser', userHandler);

app.listen(3000, ()=>{
    console.log('listening on port 3000');
})