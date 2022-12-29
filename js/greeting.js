const loginform = document.querySelector(".login-form");
const logininput = document.querySelector(".login-form input");
const loginh1 = document.querySelector("h1");
const HIDDEN_CLASSNAME = "hidden";
const KEY_USERNAME = "username";

function btnclick(event) {
  event.preventDefault();
  loginform.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(KEY_USERNAME, logininput.value);
  h1text();
}

function h1text() {
  const usernaaaaame = localStorage.getItem(KEY_USERNAME);
  loginh1.classList.remove(HIDDEN_CLASSNAME);
  loginh1.innerText = `hello ${usernaaaaame} !`;
}
const localusername = localStorage.getItem(KEY_USERNAME);

if (localusername === null) {
  loginform.classList.remove(HIDDEN_CLASSNAME);
  loginform.addEventListener("submit", btnclick);
} else {
  h1text(localusername);
}
