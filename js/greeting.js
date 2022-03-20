const loginForm = document.querySelector("#loginForm");
const inputUserName = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");

const greetRemoveBtn = document.querySelector("#remove-btn");
const removeHint = document.querySelector("#greetRemove");

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

  loginForm.classList.add(HIDDEN_CLASS);
  showGreeting(userName);
}

function showGreeting(name) {
  greeting.innerText = `${greet[random()]}~! ${name}`;
  greeting.classList.remove(HIDDEN_CLASS);
  greetRemoveBtn.classList.remove(HIDDEN_CLASS);
}

const savedUserName = localStorage.getItem("username");

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  showGreeting(savedUserName);
}

greetRemoveBtn.addEventListener("mouseover", function () {
  removeHint.classList.remove(HIDDEN_CLASS);
});

greetRemoveBtn.addEventListener("mouseout", function () {
  removeHint.classList.add(HIDDEN_CLASS);
});

greetRemoveBtn.addEventListener("click", function () {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", loginSubmit);
  greeting.classList.add("hidden");
  greetRemoveBtn.classList.add("hidden");
});
