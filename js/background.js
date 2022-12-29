const img = ["1.jpg", "2.jpg", "3.jpg"];

// const imgselect = img[Math.floor(Math.random() * img.length)];

// const bodyimg = document.createElement("img");

// bodyimg.src = `${imgselect}`;

// document.body.appendChild(bodyimg);

const imgselect = img[Math.floor(Math.random() * img.length)];

const bodyimg = document.createElement("img");

bodyimg.src = `${imgselect}`;

document.body.appendChild(bodyimg);
