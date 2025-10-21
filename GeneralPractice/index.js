const userName = "";

const WelcomeMsg = document.getElementById("welcomeMsg");

WelcomeMsg.textContent += userName === "" ? " Guest" : ` ${userName}`;
