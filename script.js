// Get the "Receive an OTP" button
const receiveOTPBtn = document.getElementById('otpBtn');

// Add click event listener to the "Receive an OTP" button
receiveOTPBtn.addEventListener('click', function() {
  // Get the mobile number input element
  const mobileNumberInput = document.getElementById('exampleFormControlInput1');

  // Get the mobile number value
  const mobileNumber = mobileNumberInput.value;

  // Get the selected option
  const selectedOption = document.querySelector('input[name="flexRadioDefault"]:checked').id;

  // Generate a random OTP
  const OTP = generateOTP();

  // Save the OTP and mobile number in sessionStorage
  sessionStorage.setItem('OTP', OTP);
  sessionStorage.setItem('MobileNumber', mobileNumber);

  // Redirect to the next page (otp.html)
  window.location.href = 'otp.html';
});

// Function to generate a random OTP
function generateOTP() {
  const digits = '0123456789';
  let OTP = '';
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}









     