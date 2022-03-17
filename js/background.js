const imgBox = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];

const selectImg = imgBox[Math.floor(Math.random() * imgBox.length)];
const bgImg = document.createElement("img");

bgImg.src = `src/${selectImg}`;
document.body.appendChild(bgImg);
