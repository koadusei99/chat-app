//get all relevant elements from DOM
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const button = document.getElementById("submitButton");

// validate credentials
function checkInput() {
  // get user name and password
  let username = usernameInput.value;
  let password = passwordInput.value;

  if (username.length < 6 || password.length < 8) {
    document.getElementById(
      "errormsg2"
    ).innerText = `Invalid username or password`;
    return;
  }

  console.log("Signed in");
  // store username in localstorage
  localStorage.setItem("username", username);

  // redirect to chat page
  window.location.href = "index.html";

  return;
}

// redirect to chat page
button.addEventListener("click", checkInput);
