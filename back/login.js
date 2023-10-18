require('dotenv').config();
const { getRandomItem } = require("./functions");

let accounts = [{email: process.env.EMAIL1, password: process.env.PASSWORD1}, {email: process.env.EMAIL2, password: process.env.PASSWORD2}, {email: process.env.EMAIL3, password: process.env.PASSWORD3}]

let randomAccount = getRandomItem(accounts);
const email = randomAccount.email;
const password = randomAccount.password;


const login = async (page) => {
  await page.goto("https://anc.apm.activecommunities.com/mecklenburgparks/signin?locale=en-US");
  const emailInput = 'input[aria-label="Email address Required"]';
  await page.waitForSelector(emailInput);

  await page.type(emailInput, email, { delay: 50 });
  await page.type('input[type="password"]', password, { delay: 50 });

  await page.click('button[type="submit"]');
  await page.waitForNavigation();
}

module.exports = login;