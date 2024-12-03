// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9S1MC2ZF4a38MDCcEDZlJxbF7LhxNl4c",
    authDomain: "contactform-22564.firebaseapp.com",
    projectId: "contactform-22564",
    storageBucket: "contactform-22564.appspot.com",
    messagingSenderId: "264292586024",
    appId: "1:264292586024:web:c9b8868ff1c12d65e19b1d",
    measurementId: "G-F2DDES2X6Y",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to Firebase Realtime Database
const contactFormDB = firebase.database().ref("contactForm");

// Helper function to get form values
const getElementVal = (id) => document.getElementById(id).value;

// Listen for form submission
document.getElementById("contactform").addEventListener("submit", submitForm);

// Submit form function
function submitForm(e) {
    e.preventDefault();

    // Get form values
    const name = getElementVal("name");
    const email = getElementVal("email");
    const message = getElementVal("message");

    console.log("Submitting:", { name, email, message }); // Debugging

    // Save the message to Firebase
    saveMessage(name, email, message);

    // Reset the form after submission
    document.getElementById("contactform").reset();
    
}

// Save messages to Firebase
const saveMessage = (name, email, message) => {
    const newContactForm = contactFormDB.push();
    newContactForm.set({
        name: name,
        email: email,
        message: message,
    });
};
