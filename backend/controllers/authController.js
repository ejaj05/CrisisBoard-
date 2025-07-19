const { User } = require("../models/user");
const bcrypt = require("bcryptjs");
require("dotenv").config()

const jwt = require("jsonwebtoken");
// Register user
const sentOtp = async(req,res) => {
  try {
    
  } catch (error) {
    
  }
}
const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // 1. Validate input
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields"
      });
    }

    // 2. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User with this email already exists"
      });
    }

    // 3. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // 4. Create and save user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: role || "civilian"
    });

    const savedUser = await newUser.save();

    // 5. Return success response
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        _id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        role: savedUser.role
      }
    });
  } catch (err) {
    console.error("Registration Error:", err.message);
    return res.status(500).json({
      success: false,
      message: "Server Error. Please try again later."
    });
  }
};


// Login User
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide both email and password"
      });
    }

    // 2. Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    // 3. Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    // 4. Generate JWT
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
        name: user.name
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // 5. Send token and user data
    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (err) {
    console.error("Login Error:", err.message);
    return res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};



module.exports = { register  , login};
