let container = document.getElementById("container");
// Hours
let hoursEL = document.createElement("span");
hoursEL.setAttribute("id","hours");

let betweenSH = document.createElement("span");
betweenSH.textContent = ":";
// minutes
let spanM10 = document.createElement("span");
spanM10.setAttribute("id","pM10");
spanM10.textContent = "00";
let betweenMS = document.createElement("span");
betweenMS.textContent = ":";
container.appendChild(spanM10);
container.appendChild(betweenMS);
// seconds
let spanS10 = document.createElement("span");
spanS10.setAttribute("id","spanS10");
spanS10.textContent = "00";
let betweenSMs = document.createElement("span");
betweenSMs.textContent = ".";
container.appendChild(spanS10);
container.appendChild(betweenSMs);
// miliSecond
let miliSecond10 = document.createElement("span");
miliSecond10.setAttribute("id","miliSecond");
miliSecond10.textContent = "00";
container.appendChild(miliSecond10);

let FirstChild = container.firstElementChild;
// All button
let playBtn = document.getElementById("play");
let pauseBtn = document.getElementById("pause");
let bookmarkBtn = document.getElementById("bookmark");
let resetBtn = document.getElementById("reset");
let timeOutID;

// addEventListener
playBtn.addEventListener("click",playTimer);
let msecond = 0, seconds= 0,minutes = 0, hours = 0;
function playTimer(){
  timeOutID = setInterval(() => {
    msecond++;
    
    if(msecond == 100){
      seconds++;
      msecond = 0;
    }
    if(seconds == 60){
      minutes++;
      seconds = 0;
    }
    if(minutes == 60){
    minutes = 0;
    container.insertBefore(hoursEL,FirstChild);
    container.insertBefore(betweenSH,FirstChild);
    hoursEL.classList.remove("d-none");
    betweenSH.classList.remove("d-none");
    hours++;
    }
    underTen(msecond,miliSecond10);
    underTen(seconds,spanS10)
    underTen(minutes,spanM10)
    underTen(hours,hoursEL)
  },10);
playBtn.classList.add("d-none");
resetBtn.classList.add("d-none");
pauseBtn.classList.remove("d-none");
bookmarkBtn.classList.remove("d-none");
}

pauseBtn.addEventListener("click",pauseTimer);
function pauseTimer(){
  clearInterval(timeOutID);
  playBtn.classList.remove("d-none");
  pauseBtn.classList.add("d-none");
  bookmarkBtn.classList.add("d-none");
  resetBtn.classList.remove("d-none");
}
let bookmarkContentdiv = document.getElementById("bookmark-content");
resetBtn.addEventListener("click",resetTimer);
function resetTimer(){
  msecond = 0, seconds = 0, minutes = 0, hours = 0;
  hoursEL.textContent = "00";
  hoursEL.setAttribute("class","d-none");
  betweenSH.setAttribute("class","d-none");
  spanM10.textContent = "00";
  spanS10.textContent = "00";
  miliSecond10.textContent = "00";
  resetBtn.classList.add("d-none");
  container.style.margin = "50%";
  while(bookmarkContentdiv.hasChildNodes()){
    bookmarkContentdiv.removeChild(bookmarkContentdiv.firstChild);
  }
  container.style.font = "80px serif";
  container.style.transition = "all 2s";
  
}

while(bookmarkContentdiv.hasChildNodes()){
    bookmarkContentdiv.removeChild(bookmarkContentdiv.firstChild);
  }
  
bookmarkBtn.addEventListener("click",addBookmar);
function addBookmar(msecond){
  let divChild = document.createElement("p");
  divChild.setAttribute("style","width: 75%; height:50px; margin: 5px 13%; padding: 16px; opacity: 0.5;");
  divChild.classList.add("justify-content-between");
  divChild.classList.add("d-flex");
  let spanNum = document.createElement("span");
  spanNum.classList.add("text-white-50");
  divChild.appendChild(spanNum);
  
//Element Number ROW
//Diference Time
  let spanDif = document.createElement("span");
  spanDif.setAttribute("class","dif-time");
  spanDif.classList.add("text-white-50");
  divChild.appendChild(spanDif);
  
// totalCurrent
  let totalCurrent = document.createElement("span");
  totalCurrent.setAttribute("class","total-current");
  totalCurrent.classList.add("text-light");
  
  divChild.appendChild(totalCurrent);

if(bookmarkContentdiv.hasChildNodes()){
  let num = bookmarkContentdiv.children.length+1;
  let prev,difMilSec,difSec,difMin,difHrs,timeHeldCurr,timeHeldPrev,diff;
  
  if(num > 10){
    spanNum.textContent = num;
    totalCurrent.setAttribute("id",spanNum.textContent)
    prev = document.getElementById(`${num-1}`).textContent;
  }else if(num == 10){
    spanNum.textContent = num;
    totalCurrent.setAttribute("id",spanNum.textContent); 
    prev = document.getElementById(`0${num-1}`).textContent;
  }else{
    spanNum.textContent = "0"+num;
    totalCurrent.setAttribute("id",spanNum.textContent); 
    prev = document.getElementById(`0${num-1}`).textContent;
  }
  if(hours == 0){
    totalCurrent.textContent = `${spanM10.textContent}:${spanS10.textContent}.${miliSecond10.textContent}`;
    
    timeHeldCurr = new Date(`30 March, 2023 00:${totalCurrent.textContent}`);
    timeHeldPrev = new Date(`30 March, 2023 00:${prev}`);
    
    
    diff = timeHeldCurr.getTime() - timeHeldPrev.getTime();
    difHrs = Math.floor(diff /1000/60/60);
    diff -= difHrs *1000*60*60;
    difMin = Math.floor(diff/1000/60);
    diff -= difMin*1000*60;
    difSec = (diff/1000).toFixed(2);
    if(difMin < 10){difMin = `0${difMin}`;}
    if(difSec < 10){difSec = `0${difSec}`;}
    
    spanDif.textContent = `+${difMin}:${difSec}`;
    
  }else{
    totalCurrent.textContent = `${hoursEL.textContent}:${spanM10.textContent}:${spanS10.textContent}.${miliSecond10.textContent}`;
    timeHeldCurr = new Date(`30 March, 2023 ${totalCurrent.textContent}`);
    if(prev.length == 11){
    timeHeldPrev = new Date(`30 March, 2023 ${prev}`);
    }else{
    timeHeldPrev = new Date(`30 March, 2023 00:${prev}`);
    }
    
    
    diff = timeHeldCurr.getTime() - timeHeldPrev.getTime();
    difHrs = Math.floor(diff /1000/60/60);
    diff -= difHrs *1000*60*60;
    difMin = Math.floor(diff/1000/60);
    diff -= difMin*1000*60;
    difSec = (diff/1000).toFixed(2);
    
    if(difHrs < 10){difHrs = `0${difHrs}`;}
    if(difMin < 10){difMin = `0${difMin}`;}
    if(difSec < 10){difSec = `0${difSec}`;}
    if(difHrs >= 1){
    spanDif.textContent = `+${difHrs}:${difMin}:${difSec}`;
  }else{
    spanDif.textContent = `+${difMin}:${difSec}`;
  }
  if(hoursEL.textContent > 23){
    alert("Out Of Capacity!");
    }
  }

  bookmarkContentdiv.insertBefore(divChild,bookmarkContentdiv.firstElementChild);
}else{
  spanNum.textContent = "0"+1;
  totalCurrent.setAttribute("id",spanNum.textContent);
  bookmarkContentdiv.appendChild(divChild)
  if(hoursEL.textContent == 0){
  spanDif.textContent = `+${spanM10.textContent}:${spanS10.textContent}.${miliSecond10.textContent}`;
  totalCurrent.textContent = `${spanM10.textContent}:${spanS10.textContent}.${miliSecond10.textContent}`;
  }else{
    spanDif.textContent = `+${hoursEL.textContent}:${spanM10.textContent}:${spanS10.textContent}.${miliSecond10.textContent}`;
    totalCurrent.textContent = `${hoursEL.textContent}:${spanM10.textContent}:${spanS10.textContent}.${miliSecond10.textContent}`;
  }
}
  container.style.margin = " 100px 50%";
  container.style.font = "60px serif";
  container.style.transition = "all 2s";
  setTimeout(function() {
    divChild.style.margin = "2px 13%";
    divChild.style.opacity= 1;
    divChild.style.transition = "all 1s";
  }, 1000);
}

//Function under10
function underTen(arg,el){
  if(arg<10){
    return el.textContent = "0"+arg;
  }else{
    return el.textContent = arg;
  }
}