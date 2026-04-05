const mongoose = require('mongoose');

//Database connection
const connectDB = mongoose
                    .connect('mongodb://localhost/pisDB')
                    .then(()=>{
                        console.log('Connected Successfully');
                    })
                    .catch(err=>{
                        console.log(err);
                    })

module.exports = connectDB;