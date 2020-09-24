function dd(data){
    console.log(data);
}
function addTimer(){
const nowDate = new Date();
const currentYear = new Date().getFullYear();
const nextYear = currentYear + 1;
const newDate = new Date(`1 Jan ${nextYear} 00:00:00`);
const nextYear_DOM = document.querySelector('.next_year');
const days_DOM = document.querySelector('.days');
const hours_DOM = document.querySelector('.hours');
const minutes_DOM = document.querySelector('.minutes');
const seconds_DOM = document.querySelector('.seconds');

nextYear_DOM.innerText = nextYear;


const diffTime = newDate - nowDate;
const days = Math.floor(diffTime / 1000 / 60 / 60 /  24)  ;
const hours = Math.floor((diffTime / 1000 / 60 / 60) % 24 );
const minutes = Math.floor((diffTime / 1000 / 60) % 60 );
const seconds = Math.floor((diffTime / 1000 ) % 60 );

    days_DOM.innerText = days;
    hours_DOM.innerText = hours;
    minutes_DOM.innerText = minutes;
    seconds_DOM.innerText = seconds;
}

addTimer();
setInterval(addTimer, 1000);













