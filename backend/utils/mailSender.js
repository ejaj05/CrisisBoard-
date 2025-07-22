const nodemailer = require("nodemailer")
require("dotenv").config();
const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      },
      tls: {
        rejectUnauthorized: false, // 👈 allows self-signed certs
      },
    })

    let info = await transporter.sendMail({
      from: "CrisiBoard - By Ejaj",
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`
    })
    return info;
  } catch (error) {
    console.error("Nodemailer Error:", error.message);
    throw error;
  }
}

module.exports = {
  mailSender
}