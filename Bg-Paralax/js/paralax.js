
window.addEventListener("scroll", imgPos);

const dataParalaxContainer = [...document.querySelectorAll("[data-paralax]")];

function gettingOut(container) {
    return container.getBoundingClientRect().top <= 0;
}

function newPos(c) {
    const v = parseFloat(c.getAttribute("data-p-velocity")) || .5;
    return c.getBoundingClientRect().top * v * -1;
}

console.log("a")
function imgPos() {

    dataParalaxContainer.forEach(c => {
        let originalPosY = getComputedStyle(c).backgroundPositionY;
        let originalPosX = getComputedStyle(c).backgroundPositionX;

        console.log(originalPosX, originalPosY)

        if (gettingOut(c)) {
            c.style.backgroundPosition = ` ${originalPosX} ${newPos(c)}px `;
        } else {
            c.style.backgroundPosition = ` ${originalPosX} 0px `
        }
    })


};

imgPos();
