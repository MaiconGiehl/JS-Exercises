let max = "images".length - 1;

function changeBackground() {
    let imgNum = parseInt(Math.random() * (max - 1 + 1) + 1);
    document.body.style.backgroundImage = `url(images/${imgNum}.jpg)`;
};