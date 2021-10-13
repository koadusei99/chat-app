const textInput = document.getElementById("textInput");
const sendButton = document.getElementById("sendButton");
const chatList = document.getElementById("chatList");

let username = "Kuhn";

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
    replyMessage += `Hello ${username}`;
  }
  if (
    text.includes("wassup") ||
    text.includes("whats up") ||
    text.includes("what's up")
  ) {
    replyMessage += ". Wassup";
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
    sendButton.setAttribute("disabled", "disabled");
  } else {
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
