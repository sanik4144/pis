const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const userSchema = require('../schemas/userSchema');
const User = new mongoose.model("User", userSchema);

//get all the users
router.get('/users', async(req, res)=>{
    try {
        const result = await User.find();
        if(result){
            res.status(200).json({
                success: true,
                data: result,
                message: "",
            })
        }else{
            res.status(200).json({
                success: true,
                data: result,
                message: "No User Found",
            })
        }
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch users",
            error: error.message,
        })
    }
})

//get all the users by role
router.get('/users/:role', async(req, res)=>{
    try {
        const result = await User.findByRole(req.params.role);
        if(result){
            res.status(200).json({
                success: true,
                data: result,
                message: "",
            })
        }else{
            res.status(200).json({
                success: true,
                data: result,
                message: "No User Found",
            })
        }
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch users",
            error: error.message,
        })
    }
})

//get user by id
router.get('/user/:id', async(req, res)=>{
    try {
        const result = await User.findById(req.params.id);
        if(result){
            res.status(200).json({
                success: true,
                data: result,
                message: "",
            })
        }else{
            res.status(200).json({
                success: true,
                data: result,
                message: "No User Found",
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch user",
            error: error.message,
        })
    }
})

//create an user
router.post('/user', async(req, res)=>{
    try {
        const result = await User.create(req.body);
            res.status(200).json({
            success: true,
            data: result,
            message: "Creating new user successfull",
        })
    } catch (error) {
        if (error.name === 'ValidationError' && error.errors.role) {
            return res.status(400).json({
                success: false,
                message: "Invalid User Role",
            });
        }

        res.status(500).json({
            success: false,
            message: "Failed to add user",
            error: error.message,
        })
    }
})

//Insert many users
router.post('/users', async(req, res)=>{
    try {
        const result = await User.insertMany(req.body);
            res.status(200).json({
            success: true,
            data: result,
            message: "Creating new users successfull",
        })
    } catch (error) {
        if (error.name === 'ValidationError' && error.errors.role) {
            return res.status(400).json({
                success: false,
                message: "Invalid User Role",
            });
        }
        
        res.status(500).json({
            success: false,
            message: "Failed to add user",
            error: error.message,
        })
    }
})

//update an user
router.put('/user/:id', async(req, res)=>{
    try {
        const result = await User.updateOne(
            {_id: req.params.id},
            {
                "name": req.body.name,
                "address": req.body.address,
                "mobile": req.body.mobile,
            }
        );
            res.status(200).json({
            success: true,
            data: result,
            message: "Updating new user successfull",
        })
    } catch (error) {
        if (error.name === 'ValidationError' && error.errors.role) {
            return res.status(400).json({
                success: false,
                message: "Invalid User Role",
            });
        }

        res.status(500).json({
            success: false,
            message: "Failed to update user",
            error: error.message,
        })
    }
})

//delete an user
router.delete('/user/:id', async(req, res)=>{
    try {
        const id = req.params.id;

        // check valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({
                success: false,
                message: "User doesn't exist",
            });
        }

        const result = await User.deleteOne(
            {_id: id},
        );
        console.log(result.deletedCount);
        if (result.deletedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "User doesn't exist",
            });
        }

        res.status(200).json({
            success: true,
            data: result,
            message: "Deleting user successfull",
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete user",
            error: error.message,
        })
    }
})

//delete multiple user based on ids
router.delete('/users', async (req, res) => {
    try {
        const ids = req.body.ids;

        // check if ids array exists
        if (!ids || !Array.isArray(ids) || ids.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No IDs provided",
            });
        }

        // filter valid ObjectIds
        const validIds = ids.filter(id => mongoose.Types.ObjectId.isValid(id));

        if (validIds.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No valid users found",
            });
        }

        const result = await User.deleteMany({
            _id: { $in: validIds }
        });

        // main fix
        if (result.deletedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "User(s) don't exist",
            });
        }

        res.status(200).json({
            success: true,
            data: result,
            message: `${result.deletedCount} user(s) deleted successfully`,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete user",
            error: error.message,
        });
    }
});


module.exports = router;