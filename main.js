const textInput = document.getElementById("textInput");
const sendButton = document.getElementById("sendButton");
const chatList = document.getElementById("chatList");
const contactList = document.querySelectorAll(".name");
const profileName = document.getElementById("profile-name");

let username = localStorage.getItem("username");

function sendText() {
  let message = textInput.value;
  addBubble(message, "text");
  parseReply(message);
  return;
}

// Add Bubble to Chat
function addBubble(message, type) {
  let time = getTime();
  //   create chatList item
  let listItem = document.createElement("li");
  listItem.classList.add("listItem");
  // create bubble element
  let bubbleDiv = document.createElement("div");
  let textMessage = document.createElement("p"); //text content
  textMessage.appendChild(document.createTextNode(message));
  let timeNode = document.createElement("p");
  timeNode.appendChild(document.createTextNode(time));
  //   add style class to elements
  if (type === "reply") {
    bubbleDiv.classList.add("reply-bubble");
  } else {
    bubbleDiv.classList.add("text-bubble");
  }
  textMessage.classList.add("text-message");
  timeNode.classList.add("time");
  //   add events

  // construct Bubble
  bubbleDiv.appendChild(textMessage);
  bubbleDiv.appendChild(timeNode);
  //append bubble to list item
  listItem.appendChild(bubbleDiv);
  //append list item to chat list
  chatList.appendChild(listItem);

  clearInput();
  toggleButton();
}

// Decide reply for text
function parseReply(text) {
  text = text.toLowerCase();
  let replyMessage = "";
  if (text.includes("hello") || text.includes("hi")) {
    replyMessage += `Hello ${username}.`;
  }
  if (
    text.includes("wassup") ||
    text.includes("whats up") ||
    text.includes("what's up")
  ) {
    replyMessage += "Its a great day. Have you written some codes today?";
  }
  if (text.includes("yes")) {
    replyMessage += "Congratulations You've done a great Job";
  }
  if (text.includes("no")) {
    replyMessage +=
      "OOPS! Please try and write some codes because it's a great day to do that";
  }
  if (text.includes("how did your day go")) {
    replyMessage += "Good by His Grace";
  }
  if (replyMessage.length < 1) {
    return;
  }
  setTimeout(() => {
    addBubble(replyMessage, "reply");
  }, 2000);
  return;
}

// disable/enable button depending on presence of input
function toggleButton() {
  if (textInput.value.length < 1) {
    sendButton.classList.add("disabled");
    sendButton.setAttribute("disabled", "disabled");
  } else {
    sendButton.classList.remove("disabled");
    sendButton.removeAttribute("disabled");
  }
}

// UTILITY
getTime = () => {
  let time = new Date();
  return `${time.getHours()}:${time.getMinutes()}`;
};
clearInput = () => {
  textInput.value = "";
};

// Event Listeners
sendButton.addEventListener("click", sendText);
textInput.addEventListener("input", toggleButton);

textInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    sendButton.click();
  }
  return;
});
contactList.forEach((c) => {
  c.addEventListener("click", (e) => {
    let name = e.target.innerText;
    name.length ? (profileName.innerText = name) : null;
    return;
  });
});
