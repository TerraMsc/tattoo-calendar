// MODIFY INFO
let month = "November"; //eng month name 
let monthPl = "Listopad"; //pl month name
let monthPlan = "curr"; //next for next month, curr for current month, prev for previous month
//

const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");
// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();
// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];
              
const renderCalendar = () => {
    
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay() - 1, // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay() -1 , // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    
    
    if(date.getDay() == 6 || date.getDay() == 0){
        days.classList.add("weekend");
     }

    let liTag = "";
    
    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    
    month.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;

    document.getElementById("month").innerHTML =  `${months[currMonth]}`;

    Object.defineProperty(String.prototype, 'capitalize', {
        value: function() {
          return this.charAt(0).toUpperCase() + this.slice(1);
        },
        enumerable: false
      });

    var getMonth = function(idx) {

        var objDate = new Date();
        objDate.setDate(1);
        objDate.setMonth(idx-1);
      
        var locale = "pl-PL",
            month = objDate.toLocaleString(locale, { month: "long" });

      
          return month;
      }
      

      console.log(getMonth(month));


}

renderCalendar();

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});


var swt = 1;

function opacity() {
    if (swt == 1) {
        document.getElementById("icons-wrap").style.opacity = 0;
        swt = 0;
    } else if (swt == 0) {
        document.getElementById("icons-wrap").style.opacity = 1;
        swt = 1;
    }
}