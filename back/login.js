
let username = "topperbrown2k@gmail.com";
let password = "Sl@pmy2nuts";

const login = async (page) => {
  await page.goto("https://anc.apm.activecommunities.com/mecklenburgparks/signin?locale=en-US");
  const emailInput = 'input[aria-label="Email address Required"]';
  await page.waitForSelector(emailInput);

  await page.type(emailInput, username, { delay: 50 });
  await page.type('input[type="password"]', password, { delay: 50 });

  await page.click('button[type="submit"]');
  await page.waitForNavigation();
}

module.exports = login;