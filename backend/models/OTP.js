const mongoose = require("mongoose");
const { mailSender } = require("../utils/mailSender");
const { otpTemplate } = require("../mail/emailVerificationTemplate");

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 5*60,
    }
})

const sendVerificationEmail = async(email,otp) => {
    try {
        const mailResponse = await mailSender(email,"Verification Email from CrisisBoard: ",otpTemplate(otp));
    } catch (error) {
        console.log("can't send otp")
    }
}

otpSchema.pre("save", async function (next) {
    await sendVerificationEmail(this.email, this.otp);
    next();
});


const OTP = mongoose.model("OTP",otpSchema)
module.exports = {
    OTP
} 