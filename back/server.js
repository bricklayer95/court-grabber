const express = require("express");
const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

const app = express();
const PORT = 3000;

//IP Rotation Setup
/*
const { Actor } = require("apify");
const run = async () => {
    await Actor.init();
    // ...
    const proxyConfiguration = await Actor.createProxyConfiguration({
        groups: ['RESIDENTIAL'],
        password: 'apify_proxy_fLsmlMXbtsD0L0rwAnv7AveeTx6BLv2WqA0J',
    });
    console.log(proxyConfiguration);

    await Actor.exit();
}
run();*/

//for formatting dates
function formatDate(inputDate) {
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
    
      const dateParts = inputDate.split('-');
      const month = parseInt(dateParts[0]) - 1; // Subtract 1 because months are zero-based in JavaScript
      const day = parseInt(dateParts[1]);
      const year = parseInt(dateParts[2]);
    
      const formattedDate = `${months[month]} ${day}, ${year}`;
    
      return formattedDate;
}


let username = "topperbrown2k@gmail.com";
let password = "Sl@pmy2nuts";

app.get("/:date/:time", (req, res) => {
  let { date, time } = req.params;

  const dateParts = date.split("-");
  if (dateParts.length === 3) {
    date = `${dateParts[0].padStart(2, '0')}-${dateParts[1].padStart(2, '0')}-${dateParts[2]}`;
  }

  date = formatDate(date);

  puppeteer.launch({ headless: false }).then(async (browser) => {
    //Open Login Page
    const page = await browser.newPage();
    await page.goto(
      "https://anc.apm.activecommunities.com/mecklenburgparks/signin?locale=en-US"
    );

    //Login Logic
    const emailInput = 'input[aria-label="Email address Required"]';
    await page.waitForSelector(emailInput);
    await page.type(emailInput, username, { delay: 100 });
    await page.type('input[type="password"]', password, { delay: 100 });
    await page.waitForTimeout(1000);
    await page.click('button[type="submit"]');
    await page.waitForNavigation();



    //Go to Select Court Page
    await page.goto(
      "https://anc.apm.activecommunities.com/mecklenburgparks/reservation/landing/quick?locale=en-US&groupId=13"
    );
    await page.waitForTimeout(10000);



    //Go to Correct Date
    await page.click('input[aria-label="Date picker, current date"]');
    const targetDate = new Date(date);
    const targetMonth = targetDate.toLocaleString('en-US', { month: 'short', year: 'numeric' });
    while (true) {
      const currentMonthElement = await page.$(".an-calendar-header-title");
      const currentMonth = await page.evaluate(
        (element) => element.textContent,
        currentMonthElement
      );
      if (currentMonth === targetMonth) {
        break;
      }
      await page.click(".icon-chevron-right");
      await page.waitForTimeout(500);
    }
    const selector = `[aria-label="${date}"]`;
    await page.waitForSelector(selector);
    await page.click(selector);




    //Select Time


    

    //Book Court
  });
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server is running on port", PORT);
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
