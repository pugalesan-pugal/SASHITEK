document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#contact-form');
    const submitButton = form.querySelector('button');
    const inputs = form.querySelectorAll('.contact-inputs');
    
    // Function to show success or error messages
    const showMessage = (message, type) => {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.style.padding = '10px';
        messageElement.style.marginTop = '20px';
        messageElement.style.borderRadius = '5px';
        if (type === 'success') {
            messageElement.style.backgroundColor = '#4CAF50';
            messageElement.style.color = '#fff';
        } else {
            messageElement.style.backgroundColor = '#f44336';
            messageElement.style.color = '#fff';
        }
        form.appendChild(messageElement);
        setTimeout(() => messageElement.remove(), 5000); // Message disappears after 5 seconds
    };

    // Form submit event handler
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission to handle via AJAX

        // Check if all fields are filled
        let allValid = true;
        inputs.forEach(input => {
            if (!input.value) {
                input.style.borderColor = '#f44336'; // Show red border for invalid fields
                allValid = false;
            } else {
                input.style.borderColor = '#39AEA6'; // Reset border color
            }
        });

        if (!allValid) {
            showMessage('Please fill in all fields.', 'error');
            return; // Stop form submission if validation fails
        }

        // Simulate form submission (replace with actual API call)
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: new FormData(form),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                showMessage('Your message has been sent successfully!', 'success');
                form.reset(); // Reset the form after successful submission
            } else {
                showMessage('There was an error, please try again.', 'error');
            }
        })
        .catch(error => {
            showMessage('Something went wrong, please try again.', 'error');
        });
    });
});
