const imgs = ["picture0.jpeg","picture1.jpeg","picture2.jpeg","picture3.jpeg","picture4.jpeg","picture5.jpeg","picture6.jpeg","picture7.jpeg","picture8.jpeg","picture9.jpeg",];

const chosenImg = imgs[Math.floor(Math.random()*imgs.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImg}`

document.body.appendChild(bgImg);
console.log(bgImg);