
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confPassword = document.getElementById("confPassword");
 
let nameError = document.getElementById("error-name");
let emailError = document.getElementById("error-email");
let passError = document.getElementById("error-password");
let confPassError = document.getElementById("conf-password");


//Show error messages under specific inputs
checkRequired= () => {

if (!username.value) {
  nameError.classList.add("visible");
  username.classList.add("invalid");
  nameError.setAttribute("aria-hidden", false);
  nameError.setAttribute("aria-invalid", true);
  nameError.innerHTML = "Please Enter Your Name *";
} else {
  return true;
}

if (!email.value) {
  emailError.classList.add("visible");
  email.classList.add("invalid");
  emailError.setAttribute("aria-hidden", false);
  emailError.setAttribute("aria-invalid", true);
  emailError.innerHTML = "Please Enter Your Email *";
} else {
  return true;
}

if (!password.value) {
  passError.classList.add("visible");
  password.classList.add("invalid");
  passError.setAttribute("aria-hidden", false);
  passError.setAttribute("aria-invalid", true);
  passError.innerHTML = "Please Enter a Password *";
} else {
  return true;
}

if (!confPassword.value) {
  confPassError.classList.add("visible");
  confPassword.classList.add("invalid");
  confPassError.setAttribute("aria-hidden", false);
  confPassError.setAttribute("aria-invalid", true);
  confPassError.innerHTML = "Please Enter a Password *";
  } else {
    return true;
  }
} 

// Check min and max length
checkLength= () => {
  if (username.value.length <= 20 && username.value.length >=3) {
    return true;
  } else {
    username.classList.add("invalid");
    nameError.innerHTML = "Make sure the username is between 3-20 character long *";
  }

  if (email.value.length <= 50 && email.value.length >=8) {
    return true;
  } else {
    email.classList.add("invalid");
    emailError.innerHTML = "Make sure the email is between 8-50 character long *";
  } 

  if (password.value.length <= 20 && password.value.length >=8) {
    return true;
  } else {
    password.classList.add("invalid");
    passError.innerHTML = "Make sure the username is between 8-20 character long *";
  }
  if (confPassword.value.length <= 20 && confPassword.value.length >=8) {
    return true;
  } else {
    confPassword.classList.add("invalid");
    confPassError.innerHTML = "Make sure the username is between 8-20 character long *";
  }
}; 

// Validate email with regex
checkEmail= () => {
  let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value.match(mailFormat)) {
    return true;
  } else {
    emailError.classList.add("invisible");
    email.classList.add("invalid");
    emailError.innerHTML = "You have entered an invalid email address!";
    return false;
  }
}; 

// Check password to match confirm password
checkPasswordsMatch = () => {
  if (password.value === confPassword.value) {
    return true;
  } else {
    passError.classList.add("visible");
    password.classList.add("invalid");
    confPassword.classList.add("invalid");
    passError.setAttribute("aria-hidden", false);
    passError.setAttribute("aria-invalid", true);
    confPassError.innerHTML = "Passwords do not match!";
  }
}; 

// to display the error message
showError = () => {
  if (!username.value || !email.value || !password.value || !confPassword.value) {
    document.getElementById("showError").innerHTML= "Error! Please, fill all the fields!";
  } else {
    return false;
  }
}; 

// to show success with green outline
showSuccess = () => {
  if (username.value.length <= 20 && username.value.length >=3) {
    username.classList.add("valid");
  } else {
    return false;
  }

  if (email.value.length <= 50 && email.value.length >=8 ) {
    email.classList.add("valid");
  } else {
    return false;
  }

  if (password.value.length <= 20 && password.value.length >=8 ) {
    password.classList.add("valid");
  } else {
    return false;
  }
  
  if (confPassword.value.length <= 20 && confPassword.value.length >=8 ) {
    confPassword.classList.add("valid");
  } else {
    return false;
  }
}; 

document.getElementById('submit').onclick=
function() {
  checkRequired();
  checkLength();
  checkEmail();
  checkPasswordsMatch();
  showError();
  showSuccess();
};