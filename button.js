 document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitButton'); // Replace 'submitBtn' with the actual ID of your submit button
    
    submitButton.addEventListener('click', function() {
      generateVisualRepresentation();
    });
  });