let datethen = new Date("Oct 17, 2022 23:59:59").getTime();

let counter = setInterval(() => {

    let datenow = new Date().getTime();

    let remaining = datethen - datenow;

    let days = Math.floor(remaining /( 1000 * 60 * 60 * 24));
    document.querySelector(".day").innerHTML = days;
    let hours = Math.floor((remaining %( 1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.querySelector(".hour").innerHTML = hours;
    let minutes = Math.floor((remaining %( 1000 * 60 * 60 ) )/ (1000 * 60) );
    document.querySelector(".minute").innerHTML = minutes;
    let seconds = Math.floor((remaining %( 1000 * 60 ) )/ 1000);
    document.querySelector(".second").innerHTML = seconds;

   while(remaining < 0){
        clearInterval(counter);
    }

}, 1000);