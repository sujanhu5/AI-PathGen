// js/scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Function to handle dummy form submission
    const handleFormSubmit = (event) => {
        event.preventDefault(); // Stop actual form submission
        
        // Get the form name/title for the alert
        const formTitle = event.target.closest('.form-container').querySelector('h2').textContent;

        // Display a dummy success alert
        alert(`🥳 Success! Your data for "${formTitle}" has been submitted. This is a static demo, no data was saved.`);
        
        // Optionally reset the form
        event.target.reset();
    };

    // Attach event listeners to all forms (Signup and Survey)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });
});