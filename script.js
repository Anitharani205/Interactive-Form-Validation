document.getElementById("next1").addEventListener("click", function () {
  if (validatePersonalDetailsForm()) {
      document.getElementById("step1").classList.remove("form-step-active");
      document.getElementById("step2").classList.add("form-step-active");
  }
});

document.getElementById("next2").addEventListener("click", function () {
  if (validateAccountSecurityForm()) {
      document.getElementById("step2").classList.remove("form-step-active");
      document.getElementById("step3").classList.add("form-step-active");
      showReviewDetails();
  }
});

document.getElementById("prev2").addEventListener("click", function () {
  document.getElementById("step2").classList.remove("form-step-active");
  document.getElementById("step1").classList.add("form-step-active");
});

document.getElementById("prev3").addEventListener("click", function () {
  document.getElementById("step3").classList.remove("form-step-active");
  document.getElementById("step2").classList.add("form-step-active");
});

document.getElementById("submit").addEventListener("click", function (event) {
  if (!validateReviewAndSubmitForm()) {
      event.preventDefault();
  } else {
      alert("Form submitted successfully!");
  }
});

function validatePersonalDetailsForm() {
  const fullName = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!/^[A-Za-z\s]+$/.test(fullName)) {
      alert("Please enter a valid full name.");
      return false;
  }

  if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email)) {
      alert("Please enter a valid email address.");
      return false;
  }

  if (!/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
  }

  return true;
}

function validateAccountSecurityForm() {
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmpassword").value.trim();
  const dob = document.getElementById("dob").value;

  if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      return false;
  }

  if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
  }

  if (!dob) {
      alert("Please enter your date of birth.");
      return false;
  }

  const birthDate = new Date(dob);
  if (birthDate >= new Date()) {
      alert("Date of Birth cannot be in the future.");
      return false;
  }

  return true;
}

function showReviewDetails() {
  const fullName = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const dob = document.getElementById("dob").value;

  document.getElementById("reviewDetails").innerHTML = `
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Date of Birth:</strong> ${dob}</p>
  `;
}

function validateReviewAndSubmitForm() {
  return true;
}
