// const clock = document.querySelector("h2.clock");

// function clockk() {
//   const date = new Date();
//   const hours = String(date.getHours()).padStart(2, "0");
//   const minutes = String(date.getMinutes()).padStart(2, "0");
//   const seconds = String(date.getSeconds()).padStart(2, "0");
//   clock.innerText = `${hours}:${minutes}:${seconds}`;
// }

// clockk();
// setInterval(clockk, 1000);

const clock = document.querySelector(".clock");

function dd() {
  const date = new Date();
  const hours = JSON.stringify(date.getHours()).padStart(2, 0);
  const minutes = String(date.getMinutes()).padStart(2, 0);
  const seconds = String(date.getSeconds()).padStart(2, 0);
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

dd();
setInterval(dd, 1000);
