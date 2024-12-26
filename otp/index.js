// Auto OTP
let otpInputRef = document.querySelector('.otp-inputs input:first-child');
const otp = "2234";
otp.split('').forEach((val, index) => {
  otpInputRef.value = val;
  otpInputRef = otpInputRef?.nextElementSibling
});

// Manual OTP
const otpInputs = document.querySelector('.otp-inputs');
otpInputs.addEventListener('keyup', (e) => {
  if(e.target.value.length > 0) {
    e.target.nextElementSibling?.focus();
  }
});

otpInputs.addEventListener('keydown', (e) => {
  if(e.target.value.length === 0 && e.keyCode === 8) {
    e.target.previousElementSibling?.focus();
  }
});