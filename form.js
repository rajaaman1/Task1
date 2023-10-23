function resetForm() {
document.getElementById('surveyForm').reset();
}

document.getElementById('surveyForm').addEventListener('submit', function(e) {
e.preventDefault();
var firstName = document.getElementById('firstName').value;
var lastName = document.getElementById('lastName').value;
var dob = document.getElementById('dob').value;
var country = document.getElementById('country').value;
var gender = [];
if (document.getElementById('male').checked) {
gender.push('Male');
}
if (document.getElementById('female').checked) {
gender.push('Female');
}
var profession = document.getElementById('profession').value;
var email = document.getElementById('email').value;
var mobile = document.getElementById('mobile').value;

var message = `First Name: ${firstName}\n` +
      `Last Name: ${lastName}\n` +
      `Date of Birth: ${dob}\n` +
      `Country: ${country}\n` +
      `Gender: ${gender.join(', ')}\n` +
      `Profession: ${profession}\n` +
      `Email: ${email}\n` +
      `Mobile Number: ${mobile}`;

alert(message);
resetForm();
});
