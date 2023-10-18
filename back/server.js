const express = require("express");
const bodyParser = require("body-parser");
const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

const login = require("./login");
const bookCourt = require("./bookCourt");
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





app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server is running on port", PORT);
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
