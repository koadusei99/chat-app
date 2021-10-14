//get all relevant elements from DOM
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const button = document.getElementById("submitButton");

// validate credentials

function checkInput() {
  // get user name and password
  let username = usernameInput.value;
  let password = passwordInput.value;

  if (username.length < 6) {
      if(username==""){
          alert('Empty field: Please enter Username');
          return;
      }
    console.log("Invalid username");
    return;
  }
  if (password.length < 8) {
      if(password == ""){
          alert('password field empty:  Please enter password');
        return;
      }
    console.log("invalid password");
    return;
  }
  console.log("Signed in");
  // store username in localstorage
  localStorage.setItem("username", username);

