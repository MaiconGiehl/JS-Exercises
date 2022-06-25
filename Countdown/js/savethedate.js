(function () {

    setInterval(() => {
        const dateEventDOM = document.querySelector(".hero-content h1 span").innerText;
        const dateEvent = getDate(dateEventDOM);
        
        const today = new Date();
        let left = dateEvent.getTime() - today.getTime();
        
        const oneMinute = 60 * 1000;
        const oneHour = 60 * 60 * 1000;
        const oneDay = 24 * oneHour;
        
        const daysLeft = parseInt(left / oneDay);
        left = left - daysLeft * oneDay;
        
        const hoursLeft = parseInt(left / oneHour);
        left = left - hoursLeft * oneHour;
        
        const minutesLeft = parseInt(left / oneMinute);
        left = left - minutesLeft * oneMinute;
        
        const secondsLeft = parseInt(left / 1000);
        
        addLeftTime(daysLeft, hoursLeft, minutesLeft, secondsLeft);
    }, 10);
    
    const p = document.createElement("p");
    function addLeftTime(d, h, m, s) {
        p.textContent = `Countdown: ${d} days, ${h} hours, ${m} minutes and ${s} seconds`;
        document.querySelector(".hero-content").appendChild(p);
    }

    function getDate(str) {
        const [date, hour] = str.split(" ");
        const [day, month, year] = date.split("/");
        const [h, m] = hour.split("H");

        return new Date(year, month - 1, day, h, m);
    }
})();