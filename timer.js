const targetDate = new Date("2026-06-01T12:00:00").getTime();
const timer = document.querySelector("#timer");

function update(){
    let now = new Date().getTime();
    let difference = targetDate-now;
    let days = zero(Math.floor(difference / (1000 * 60 * 60 * 24)));
    let hours = zero(Math.floor((difference / (1000 * 60 * 60)) % 24));
    let minutes = zero(Math.floor((difference / (1000 * 60)) % 60));
    let seconds = zero(Math.floor((difference / 1000) % 60));
    console.log(days, hours, minutes, seconds);

    let remaining = (days+" : "+hours+" : "+minutes+" : "+seconds);
    timer.innerHTML= remaining;
}
function zero(variable){
    return String(variable).padStart(2,"0");
}
update();
setInterval(update, 1000);