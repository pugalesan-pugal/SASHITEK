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
const notificationsDB = firebase.database().ref("notifications");

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

    // Show success message
    showSuccessMessage();
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

// Function to show success message
const showSuccessMessage = () => {
    const alertDiv = document.querySelector(".alert");
    alertDiv.style.display = "block"; // Show the success message

    // Hide the success message after 3 seconds
    setTimeout(() => {
        alertDiv.style.display = "none";
    }, 3000);
};

// Function to listen for new notifications in Firebase
const listenForNotifications = () => {
    notificationsDB.on("child_added", (snapshot) => {
        const notification = snapshot.val();
        displayNotification(notification.message);
    });
};

// Function to display notifications
const displayNotification = (message) => {
    const notificationList = document.getElementById("notificationList");
    const notificationItem = document.createElement("li");
    notificationItem.textContent = message;
    notificationList.appendChild(notificationItem);
};

// Call the function to start listening for notifications
listenForNotifications();
