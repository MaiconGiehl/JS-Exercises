(function(){
    window.addEventListener("scroll", markMenu);

    const menu = document.querySelector(".nav");
    const links = menu.querySelectorAll("li a");
    

    function markMenu () {
        let positions = [...links].map(link => {
            let href = link.getAttribute("href");
            let h2 = document.querySelector(href);
            return h2.getBoundingClientRect().top;
        });

        let activeLink = takeLastSeenElement(positions);
        let activedMenu = menu.querySelector(".actived");
        if (activedMenu) {
            activedMenu.classList.remove("actived");
        }
        if (activeLink) {
            return activeLink.classList.add("actived");
        }
        return links[0].classList.add("actived");
    }

    function takeLastSeenElement(_positions) {
        let positions = _positions.filter( n => n < innerHeight / 2);
        return links[positions.length - 1];
    }

    markMenu();
}) ();