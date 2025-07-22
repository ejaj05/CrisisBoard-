const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type : Number
    },
    role: {
        type: String,
        enum: ['citizen', 'responder', 'admin'],
        default: 'citizen'
    },
    image: {
        type: String
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point'
        },
        coordinates: {
            type: [Number],   // ["longitude",latitude]
            default: [0, 0]
        }
    },
},{ timestamps: true })
userSchema.index({ location: '2dsphere' });
const User = mongoose.model("User",userSchema)
module.exports={
    User
}