const express = require('express');
const app = express();
const productHandler = require('./routerHandler/productHandler');

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('hello');
})

app.use('/pis', productHandler);

app.listen(3000, ()=>{
    console.log('listening on port 3000');
})