var d, h, m , s, clock,week, day, month,year, fullDate, color;
var weekday = new Array(7);
function clockCalulate(){
 d = new Date();
 h = d.getHours();
 m = d.getMinutes();
 s = d.getSeconds();
 day=d.getDate();
 month=d.getMonth()+1;
 year=d.getFullYear();
 
 
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

 
 
 
 
 
if (h <= 9){
 h = '0'+ h;
}
if (m <= 9){
 m = '0'+  m;
}
if (s <= 9){
 s= '0'+ s;
}
 if (day <= 9){
 day= '0'+ day;
}
 
 if (month <= 9){
 month= '0'+ month;
}
 

clock= h + ":" +m +":"+s;
 week=weekday[d.getDay()];
fullDate= month + "," + day +","+year;
color="#"+ h + m + s;
document.getElementById("clock").innerHTML=clock;
document.getElementById("weekDay").innerHTML=week;
 
 
document.getElementById("date").innerHTML=fullDate;

document.body.style.background=color;
setTimeout(clockCalulate, 1000)

}
clockCalulate();