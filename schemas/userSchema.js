const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    role: {
        type: String,
        trim: true,
        required: true,
        default: "visitor",
        enum: ["visitor", "reseller", "admin"],
    },
    address: {
        type: String,
        trim: true,
    },
    mobile: {
        type: String,
        trim: true,
        match: [/^\d{10,15}$/, "Please use a valid phone number"],
    },
    registerDate: {
        type: Date,
        default: Date.now,
    }
})

userSchema.statics = {
    findByRole: function(role){
        return this.find(
            {role: role},
        )
    }
}

module.exports = userSchema;