


function howMuchTo(m, d) {
    const today = new Date();
    today.setHours(0), today.setMinutes(0), today.setSeconds(0), today.setMilliseconds(0);
    let year = today.getFullYear();
    
    const birthday = new Date(year, m - 1, d);
    
    // const todayTS = today.getTime();
    let todayTS = +today;
    let birthdayTS = +birthday;
    
    if (birthdayTS < todayTS) {
        birthday.setFullYear(++year);
        birthdayTS = +birthday;
    }
    
    const oneDay = 24 * 60 * 60 * 1000;
    const difference =  birthdayTS - todayTS;
    console.log(difference)
    console.log(birthdayTS)
    return difference / oneDay;

}