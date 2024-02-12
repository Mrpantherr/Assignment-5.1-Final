// Michael Ravelo
document.getElementById('userInfoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // This is for input values
    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var zipCode = document.getElementById('zipCode').value.trim();
  
    // Here we combine first and last name
    var fullName = firstName + ' ' + lastName;
  
    // Full name is checked for more than 20 characters
    if (fullName.length > 20) {
      document.getElementById('message').textContent = 'Full name should not exceed 20 characters!';
      return; // function ends if condition is met
    }
  
    // Checks if zip code is valid and contains 5 digits
    if (!(/^\d{5}$/.test(zipCode))) {
      document.getElementById('message').textContent = 'Zip code should be 5 digits!';
      return; // Exit the function if condition is met
    }
  
    // If all our validations pass, display the secret message
    document.getElementById('message').textContent = 'Secret message: You did it!';
  });
  