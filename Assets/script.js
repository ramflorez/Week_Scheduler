var CurrentDay = document.getElementById("currentDay");
var todays_date = moment().format('LLLL');
CurrentDay.textContent = todays_date

    
const timeblock = document.querySelectorAll(".time-block");
let currentHour = parseInt(moment().format('hh'));

for (i=0; i<timeblock.length; i++){
    console.log(timeblock[i])
  console.log(timeblock[i].id)
  timeblock[i].children[1].setAttribute("id",i);
var TimeblockHour = timeblock[i].id
    // Compares Timeblock id to current hour and sets color accordingly
    if (currentHour === TimeblockHour) {
      timeblock[i].children[1].classList.add("present")
    } 
    else if (currentHour < TimeblockHour){
        timeblock[i].children[1].classList.add("past")
    }
    else {
        timeblock[i].children[1].classList.add("future")
    }

};

const saveBtn = document.querySelectorAll(".saveBtn"); 
for (var i=0; i<saveBtn.length; i++){
    saveBtn[i].addEventListener('click', setLocalStorage);           
}   

function setLocalStorage(event){
    console.log(event.target);
    console.log(event.target.parentElement.children[1].value.trim());
    var eventName = event.target.parentElement.children[1].value.trim();
    
var timeDay = event.target.parentElement.id
localStorage.setItem(timeDay, eventName)
}

function getStorage(){
    var keys = Object.keys(localStorage)
    keys.forEach(function(key){
        console.log(key)
        var eventName = localStorage.getItem(key)
        document.getElementById(key).children[1].value = eventName
        console.log(localStorage.getItem(key))
    })
    
}
getStorage()

