// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9S1MC2ZF4a38MDCcEDZlJxbF7LhxNl4c",
    authDomain: "contactform-22564.firebaseapp.com",
    databaseURL: "https://contactform-22564-default-rtdb.firebaseio.com/", // Add database URL
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

// Function to load messages
function loadMessages() {
    contactFormDB.on("value", (snapshot) => {
        console.log("Database snapshot received:", snapshot.val()); // Debugging log
        const messagesTableBody = document.getElementById("messages-table-body");
        messagesTableBody.innerHTML = ""; // Clear table before updating

        const data = snapshot.val();
        if (data) {
            for (let id in data) {
                const { name, email, message } = data[id];
                console.log(`Message ID: ${id}, Name: ${name}, Email: ${email}, Message: ${message}`); // Debugging log

                const row = `
                    <tr>
                        <td>${name}</td>
                        <td>${email}</td>
                        <td>${message}</td>
                    </tr>
                `;
                messagesTableBody.innerHTML += row;
            }
        } else {
            console.warn("No data found in the database.");
        }
    }, (error) => {
        console.error("Error retrieving data from Firebase:", error);
    });
}

// Function to download messages as Excel
function downloadExcel() {
    const messagesTable = document.querySelector('.messages-table');
    const wb = XLSX.utils.table_to_book(messagesTable, { sheet: "Messages" });
    XLSX.writeFile(wb, "messages.xlsx");
}

// Load messages when the page loads
window.onload = loadMessages;

// Add event listener to the download button
document.getElementById('download-excel').addEventListener('click', downloadExcel);
