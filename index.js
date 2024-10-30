const days=document.getElementById('days');
const hours=document.getElementById('hours');
const minutes=document.getElementById('minutes');
const seconds=document.getElementById('seconds');



//we have findout the today date

const currentYear=new Date().getFullYear();//2024
//console.log(currentYear);
const nextYear=currentYear+1;//2025
//console.log(nextYear);
//Time
function update(){
const   newYearTime= new Date(`january 01 ${nextYear} 00:00:00`); 
 
console.log(newYearTime)
    const currentTime = new Date();
console.log(currentTime)
    const different = newYearTime-currentTime;
    console.log(different)
let day=Math.floor(different/1000/60/60/24);
console.log(day)
let hour=Math.floor(different/1000/60/60)%24;
let mintue=Math.floor(different/1000/60)%60;
let second=Math.floor(different/1000)%60;


days.innerHTML= day < 10 ?"0"+ day : day ;
hours.innerHTML= hour < 10 ?"0"+ hour : hour ;
minutes.innerHTML= mintue < 10 ? "0" + mintue : mintue ;
seconds.innerHTML= second < 10 ? "0" + second : second ;
}
setInterval(update,1000);
update();
// const days=document.getElementById('days');
// const hours=document.getElementById('hours');
// const minutes=document.getElementById('minutes');
// const seconds=document.getElementById('seconds');
// //Year

// const currentYear=new Date().getFullYear();//2024
// //console.log(currentYear);
// const nextYear=currentYear+1;
// //console.log(nextYear);

// //Time 
// function update(){
//   const newYearTime= new Date(`January 01 ${nextYear} 00:00:00`);
//   console.log(newYearTime)
//   const currentTime=new Date();
//   console.log(currentTime)
//   const difference=newYearTime-currentTime;
//   console.log(difference)

//   let day=Math.floor(difference/1000/60/60/24);
//   console.log(day)
//   let hour=Math.floor(difference/1000/60/60)%24;
//   let minute=Math.floor(difference/1000/60)%60;
//   let second=Math.floor(difference/1000)%60;

//   days.innerHTML=day<10 ? "0"+day : day;
//   hours.innerHTML=hour<10 ? "0"+hour : hour;
//   minutes.innerHTML=minute<10 ? "0"+minute : minute;
//   seconds.innerHTML=second<10 ? "0"+second : second;
// }
// setInterval(update,1000);
// update();





