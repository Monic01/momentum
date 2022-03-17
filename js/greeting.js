const loginForm = document.querySelector("#loginForm");
const inputUserName = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";

const greet = ["Hello", "Welcome", "Bonjour"];

function random() {
  const random = Math.floor(Math.random() * greet.length);
  return random;
}

function loginSubmit(event) {
  event.preventDefault();
  const userName = inputUserName.value;

  localStorage.setItem("username", userName);

  showGreeting(userName);
  loginForm.classList.add("hidden");
}

function showGreeting(name) {
  greeting.innerText = `${greet[random()]}~! ${name}`;
  greeting.classList.remove("hidden");
}

const savedUserName = localStorage.getItem("username");

if (savedUserName === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", loginSubmit);
} else {
  showGreeting(savedUserName);
}
