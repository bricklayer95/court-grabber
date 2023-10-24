let months = [
    { month: 'January', days: 31 },
    { month: 'February', days: 28 },
    { month: 'March', days: 31 },
    { month: 'April', days: 30 },
    { month: 'May', days: 31 },
    { month: 'June', days: 30 },
    { month: 'July', days: 31 },
    { month: 'August', days: 31 },
    { month: 'September', days: 30 },
    { month: 'October', days: 31 },
    { month: 'November', days: 30 },
    { month: 'December', days: 31 },
];



let curDate = new Date()
let currentMonth = curDate.getMonth();
let selectedDay = curDate.getDate();
//REMOVE + 1 AND - 1 WHEN READY, THESE ARE JUST TO GET TO SPECIFIC DATA IN FB
let startDate = `${currentMonth + 1}-${selectedDay - 1}-23`;



let nextMonth = () =>{
    if(currentMonth < 11){
        currentMonth++
    } else{
        currentMonth = 0
    }
}

let backMonth = () =>{
    if(currentMonth > 0){
        currentMonth--
    } else{
        currentMonth = 12;
    }
}

let addTimeSlot = (slot) => {
    request.timeSlots.push(slot);
    request = request;
}

let selectDay = (i) => {
    selectedDay = i
}

export {months, curDate, selectedDay, startDate, nextMonth, backMonth, addTimeSlot, selectDay}