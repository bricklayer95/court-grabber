require('dotenv').config();
const { getRandomItem } = require("./functions");

const login = async (page, email, password) => {
  await page.goto("https://anc.apm.activecommunities.com/mecklenburgparks/signin?locale=en-US");
  const emailInput = 'input[aria-label="Email address Required"]';
  await page.waitForSelector(emailInput);

  await page.type(emailInput, email, { delay: 50 });
  await page.type('input[type="password"]', password, { delay: 50 });

  await page.click('button[type="submit"]');
  await page.waitForNavigation();
}

module.exports = login;