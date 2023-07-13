// Get the OTP input element and the submit button
const otpInput = document.getElementById('otpInput');
const submitBtn = document.getElementById('submitBtn');

// Add click event listener to the submit button
submitBtn.addEventListener('click', function() {
  // Get the saved OTP and mobile number from sessionStorage
  const savedOTP = sessionStorage.getItem('OTP');
  const mobileNumber = sessionStorage.getItem('MobileNumber');

  // Get the entered OTP value
  const enteredOTP = otpInput.value;

  // Check if the entered OTP matches the saved OTP
  if (enteredOTP === savedOTP) {
    console.log('OTP verification successful');
    console.log('Mobile Number:', mobileNumber);

    // Redirect to the next page (newpage.html) or perform any desired action
    window.location.href = 'lastpage.html';
  } else {
    console.log('OTP verification failed');
    // Perform error handling or display an error message to the user
  }
});
