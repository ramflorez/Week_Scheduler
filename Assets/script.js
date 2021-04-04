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
      
const textarea = document.querySelectorAll(".texarea")
for (var i=0; i<textarea.length; i++){
}

function setLocalStorage(event){
    var textarea = (".textarea")
    var saveBtn = (".saveBtn")
    saveBtn.addEventListener('click', setLocalStorage); 


}
setLocalStorage.getElementById(saveBtn, textarea)
    
}