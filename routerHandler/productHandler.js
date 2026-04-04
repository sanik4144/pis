const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const productSchema = require('../schemas/productSchema');
const Product = new mongoose.model("Product", productSchema);


//Database connection
mongoose
    .connect('mongodb://localhost/pisDB')
    .then(()=>{
        console.log('Connected Successfully');
    })
    .catch(err=>{
        console.log(err);
    })

//Get one product
router.get('/product/:id', async(req, res)=>{
    try{
        const result = await Product.findById(req.params.id).select({
        _id: 0,
        __v: 0,
    });
    if(result){
        res.status(200).json({
            success: true,
            data: result,
            message: "Data Found"
        });
    }else{
        res.status(200).json({
            success: true,
            data: result,
            message: "No data found"
        });
    }
    
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Failed to fetch data",
            error: error.message,
        })
    }
})

//Get all products
router.get('/products',async (req, res)=>{
    try{
        const result = await Product.find();
        res.status(200).json({
            success: true,
            data: result
        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Failed to fetch data",
            error: error.message,
        });
    }
})

//Post one product
router.post('/product', async (req, res)=>{
    try{
        const result = await Product.create(req.body);

        res.status(200).json({  
        success: true,
        data: result,
    })
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Failed to insert data",
            error: error.message,
        })
    }
})


//Post multiple product
router.post('/products', async(req, res)=>{
    try{
        const result = await Product.insertMany(req.body);

        res.status(200).json({
            success: true,
            data: result,
        })
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Failed to add products",
            error: error.message,
        })
    }
})

//Update a product
router.put('/product/:id', async(req, res)=>{
    try {
        const result = await Product.updateOne(
            {_id: req.params.id},
            {$set: req.body},
        );

        res.status(200).json({
            success: true,
            data: result,
            message: "Update Successfull",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update",
            error: error.message,
        })
    }
})

//Update many products  (update all the category names of a product category  [Smart Watch -> Smart Ware])
router.put('/products/:category', async(req, res)=>{
    try {
        const result = await Product.updateMany(
            {category: req.params.category},
            {$set: req.body},
        );

        res.status(200).json({
            success: true,
            data: result,
            message: "Update Successfull",
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update",
            error: error.message,
        })
    }
})

//Delete one product
router.delete('/product/:id', async(req, res)=>{
    try {
        const result = await Product.deleteOne(
            {_id: req.params.id}
        );

        res.status(200).json({
            success: true,
            data: result,
            message: "Deleted Successfully",
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete",
            error: error.message,
        })
    }
})


//Delete multiple products (delete based on the array of IDs given from request body)
router.delete('/products', async(req, res)=>{
    try {
        const result = await Product.deleteMany(
            {_id: {$in: req.body.ids}}
        );

        res.status(200).json({
            success: true,
            data: result,
            message: "Deleted Successfully",
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete",
            error: error.message,
        })
    }
})


module.exports = router;