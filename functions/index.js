const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

// Initialize Firebase Admin SDK
admin.initializeApp();

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "d",  // Replace with your Gmail
    pass: "d",     // Replace with your Gmail App password
  },
});

// Cloud Function to send email notification on new contact form submission
exports.sendEmailNotification = functions.database
  .ref("/contactForm/{pushId}")
  .onCreate((snapshot, context) => {
    const data = snapshot.val();

    // Email content
    const mailOptions = {
      from: "pugalesan2004@gmail.com",
      to: "pugalesan001@gmail.com", // Replace with recipient email
      subject: "New Contact Form Submission",
      text: `You have received a new message:\n\nName: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
    };

    // Send email
    return transporter
      .sendMail(mailOptions)
      .then(() => console.log("Email sent successfully!"))
      .catch((error) => console.error("Error sending email:", error));
  });
