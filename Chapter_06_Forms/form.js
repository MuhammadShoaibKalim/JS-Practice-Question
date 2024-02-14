let form = document.querySelector('.sign-up-Form');

let partnerPasswordPattern = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).{8}$/;

form.addEventListener('submit', function(e) {
     e.preventDefault();
     
     // Get the values of email and password fields
     let email = form.email.value;
     let password = form.password.value;
     console.log(email);
     console.log(password);
     // Validate email format
     if (!validateEmail(email)) {
         console.log("Invalid email format");
         return;
     }
     
     // Validate password format
     if (!partnerPasswordPattern.test(password)) {
         console.log("Password must contain at least 8 characters including at least one uppercase letter, one lowercase letter, and one digit");
         return;
     }
     
  

     // If both email and password are valid, log success message
     console.log("Submit the form successfully !");
});

function validateEmail(email) {
    // Regular expression for basic email validation
    let emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
}
