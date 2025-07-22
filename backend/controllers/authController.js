const { User } = require("../models/user");
const bcrypt = require("bcryptjs");
const otpGenerator = require("otp-generator")
require("dotenv").config()

const jwt = require("jsonwebtoken");
const { OTP } = require("../models/OTP");
// Register user
const sentOtp = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.find({ email });
    if (user.length > 0) {
      return res.status(400).json({
        success: false,
        message: "User already exist"
      })
    }
    var otp = otpGenerator.generate(6, { upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false });
    const response = await OTP.create({ email, otp: otp })
    return res.status(200).json({
      success: true,
      message: "OTP send successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}


// Sign up
const Signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword, number, otp } = req.body;
    if(!otp){
      return res.status(400).json({
        success: false,
        message: "Please Enter the OTP"
      })
    }
    if (!firstName || !lastName || !email || !password || !confirmPassword || !number) {
      return res.status(400).json({
        success: false,
        message: "All Fields are required!"
      })
    }
    const user = await User.find({ email });
    if (user.length > 0) {
      return res.status(400).json({
        success: false,
        message: "User already exist"
      })
    }

    // Recent most value
    const recentOtp = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);

    if (recentOtp.length == 0) {
      return res.status(400).json({
        success: false,
        message: "OTP not found"
      })
    } else if (recentOtp[0].otp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP"
      });
    }
    if (password != confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "password and confirmPassword are not same"
      })
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const response = await User.create({ firstName, lastName, email, password: hashPassword, number, image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName}${lastName}` });
    response.password = undefined;

    return res.status(200).json({
      success: true,
      message: "User Registered Successfully"
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}


// Login User
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide both email and password"
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

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
      message: "Login successfull",
      token,
      user
    });

  } catch (err) {
    console.error("Login Error:", err.message);
    return res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};



module.exports = { sentOtp, Signup, login };
