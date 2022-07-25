const imgs = ["picture1.jpeg", "picture2.jpeg", "picture3.jpeg", "picture5.jpeg", "picture6.jpeg", "picture7.jpeg",];

const chosenImg = imgs[Math.floor(Math.random() * imgs.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${chosenImg}`;
const bgImgPath = `../img/${chosenImg}`
// document.body.style.background = "url(" + bgImgPath + ")";
// document.body.style.backgroundSize = 'contain';
// document.body.style.backgroundAttachment = 'fixed';
// document.body.style.backgroundRepeat = 'no-repeat';
// console.log(document.body.style.background);

bgImg.className = 'background-img';
document.body.appendChild(bgImg);
