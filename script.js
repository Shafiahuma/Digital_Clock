const hourEl=document.getElementById("hour"); //declaring a variable named hourEl and accessing the id "hour" from html

const minuteEl=document.getElementById("minutes");
const secondEl=document.getElementById("seconds");
const ampmEl=document.getElementById("ampm");

function updateclock()
{
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h > 12){
      h -= 12
      ampm="PM"
    }

hourEl.innerText = h;
minuteEl.innerText = m;
secondEl.innerText = s;
ampm.innerText = ampm;
setTimeout(()=>){}
}
