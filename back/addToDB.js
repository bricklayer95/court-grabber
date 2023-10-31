const {db} = require("./firebase");
const { doc, setDoc } = require("firebase/firestore");

const addSlotToDB = async (park, date, courtNumber, timeSlot1, timeSlot2) =>{
    let timeslots = {}

    timeslots[timeSlot1] = {
      booked: false,
      time: timeSlot1  
    };

    timeslots[timeSlot2] = {
      booked: false,
      time: timeSlot2 
    };


    await setDoc(doc(db, park, date.replace(/20/, '')), {
      [`Court #${courtNumber}`]: {timeslots: timeslots}
    }, {merge: true});
}

module.exports = { addSlotToDB };
    