
//sign-up
export function signUp() {
  let emailOrPhoneValue = document.getElementById('emailOrPhone').value.toLowerCase();
  let exist = formData.some(data => data.emailOrPhone.toLowerCase() === emailOrPhoneValue);
  var formData = JSON.parse(localStorage.getItem('formData')) || [];

var mySignUp = document.getElementById('signUp');

mySignUp.addEventListener('click', signUp);

  if (!exist) {
         
      formData.push({
          fName: document.getElementById('fName').value,
          lName: document.getElementById('lName').value,
          emailOrPhone: emailOrPhoneValue,
          pass: document.getElementById('pass').value,
          day: document.getElementById('day').value,
          month: document.getElementById('month').value,
          year: document.getElementById('year').value,
          female: document.getElementById('female').checked,
          male: document.getElementById('male').checked,
          custom: document.getElementById('custom').checked
      });
      localStorage.setItem('formData', JSON.stringify(formData));
  } else {
      console.log('User with this email/phone already exists.');
  }
}
