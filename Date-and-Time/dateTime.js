const day = document.getElementById("day");
const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");


const today = new Date();

const weekDays = [ "Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" ]; 
const months = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];


date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = months[today.getMonth()];
year.innerHTML = today.getFullYear();


const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

setInterval(()=>{
const currentTime = new Date();

hour.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
minute.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
second.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();

},1000)



