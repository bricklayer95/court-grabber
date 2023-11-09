const express = require("express");
const bodyParser = require("body-parser");
const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const { addSlotToDB } = require("./addToDB");
import { updateSubscriptionStatus } from "./updateSubscriptionStatus";
puppeteer.use(StealthPlugin());

const login = require("./login");
const logout = require("./logout");

const bookCourt = require("./bookCourt");
const bookCourtV2 = require("./bookCourtV2");
const checkForConfirmation = require("./checkForConfirmation");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/reserve", (req, res) => {
  let { eventName, time, park, courtNumber, date, sport, players } = req.body;

  puppeteer.launch({ headless: false }).then(async (browser) => {
    const page = await browser.newPage();
    await login(page);

    await bookCourt(page, eventName, date, time, park, courtNumber, sport, players);
  });

});

app.post("/reserveV2", async (req, res) => {
  let { eventName, timeSlots, park, courtNumbers, date, sport, players } = req.body;

  //Move to functions.js
  function getMinimumAccounts(timeSlots, courtNumbers) {
    const numCourts = courtNumbers.length;
    const numTimeSlots = timeSlots.length;
    const accountsPerCourt = Math.ceil(numTimeSlots / 2);
    const totalAccounts = accountsPerCourt * numCourts;
    return totalAccounts;
  }

  courtNumbers = courtNumbers.split(",");
  
  const minAccounts = getMinimumAccounts(timeSlots, courtNumbers);
  console.log(minAccounts);

  //Select a radom account check the db, make sure account can be used for that day

  //Logins in with that account

  //Books with that account with that account


  /*
  puppeteer.launch({ headless: false }).then(async (browser) => {
    const page = await browser.newPage();
    await login(page);

    await bookCourt(page, eventName, date, time, park, courtNumber, sport, players);
  });*/

});

app.post("/reserveV3", async (req, res) => {
  let { eventName, time, park, courtNumber, date, sport, players } = req.body;

  let timeSlot1 = "6:00 PM - 7:00 PM";
  let timeSlot2 = "7:00 PM - 8:00 PM";

  await puppeteer.launch({ headless: false }).then(async (browser) => {
    const page = await browser.newPage();
    courtNumber = 5;

    let email = process.env.EMAIL2;
    let password = process.env.PASSWORD2;
    await login(page, email, password);

    await bookCourtV2(page, eventName, date, park, courtNumber, sport, players, timeSlot1, timeSlot2);
    await browser.close();

    await addSlotToDB(park, date, courtNumber, timeSlot1, timeSlot2);
  });

  await puppeteer.launch({ headless: false }).then(async (browser) => {
    const page = await browser.newPage();
    courtNumber = 6;

    let email = process.env.EMAIL2;
    let password = process.env.PASSWORD2;
    await login(page, email, password);

    await bookCourtV2(page, eventName, date, park, courtNumber, sport, players, timeSlot1, timeSlot2);
    await browser.close();

    await addSlotToDB(park, date, courtNumber, timeSlot1, timeSlot2)
  });

  res.send("Donezo");
});


app.post('/webhook', express.json({type: 'application/json'}), (request, response) => {
  const event = request.body;

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log(event.data)
      //await updateSubscriptionStatus(userUid, status)
      break;
    case 'payment_method.attached':
      const paymentMethod = event.data.object;
      //await updateSubscriptionStatus(userUid, status)
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  
  response.json({received: true});
});





app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server is running on port", PORT);
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
