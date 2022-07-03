
(function () {
    const fx = document.getElementsByClassName("fx");

    window.addEventListener("scroll", function () {
        if (pageYOffset > 200 || !fx[0]) {
            document.body.classList.add('fx');
            console.log(pageYOffset)
        } else if (pageYOffset <= 200 && fx[0]) {
            document.body.classList.remove("fx");
            console.log(pageYOffset)
        }
    })
})()