const express = require("express");
const { Signup, sentOtp, login } = require("../controllers/authController");
const userRoutes = express.Router();

userRoutes.post('/sendOtp',sentOtp)
userRoutes.post("/signup",Signup)
userRoutes.post("/login",login)

module.exports = {
    userRoutes
}