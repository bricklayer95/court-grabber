require('dotenv').config();
const {formatDate} = require("./functions");
const sendEmail = require('./sendEmail');

const cardHolderName = process.env.CARD_HOLDER_NAME;
const cardNumber = process.env.CARD_NUMBER;
const cardExpiryMonth = process.env.CARD_EXPIRY_MONTH;
const cardExpiryYear = process.env.CARD_EXPIRY_YEAR;
const cardCVV = process.env.CARD_CVV;


const bookCourt = async (
  page,
  eventName,
  date,
  time,
  park,
  courtNumber,
  sport,
  players
) => {
  await page.goto(
    "https://anc.apm.activecommunities.com/mecklenburgparks/reservation/landing/quick?locale=en-US&groupId=13"
  );

  await page.waitForSelector('i.icon.icon-loading-m.icon-spin', {hidden: true});

  await page.click('input[aria-label="Date picker, current date"]');
  await page.waitForTimeout(50);
  const ariaDate = formatDate(date);
  await page.click(`div[aria-label="${ariaDate}"]`);

  await page.waitForSelector('i.icon.icon-loading-m.icon-spin', {hidden: true});

  await page.setViewport({ width: 600, height: 600 });

  const titleVariations = [`${park} - Tennis #${courtNumber} (Lights) ${time} Available`, `${park} - Tennis #${courtNumber} ${time} Available`, `${park} - Tennis # ${courtNumber} ${time} Available`, `${park} - Tennis # ${courtNumber} (Lights) ${time} Available`];
  let success = false;

  for(let variation in titleVariations){
    try{
      await page.click(`div[aria-label="${titleVariations[variation]}"]`);
      success = true;
      break;
    }catch(e){
      console.log(e);
    }
  }

  if (!success) {
    throw new Error("Court Not Available");
  }

  await page.type('input[aria-label="Event name"]', eventName);

  await page.waitForSelector('button[aria-label="1 Resource(s), 1 Booking(s) selected Confirm"]', {visible: true});
  await page.click('button[aria-label="1 Resource(s), 1 Booking(s) selected Confirm"]');

  await page.waitForSelector('i.icon.icon-loading-m.icon-spin', {hidden: true});
  await page.click('button[aria-label="Total $5.00 Reserve"]');

  await page.waitForTimeout(3000);
  await page.click('.modal-footer > button.btn.btn-strong');


  await page.waitForTimeout(8000);

  const iframeSelector = 'iframe[name="primaryPCIPaymentIframe"]';
  await page.waitForSelector(iframeSelector);
  const iframeElement = await page.$(iframeSelector);
  const iframe = await iframeElement.contentFrame();

  await page.waitForTimeout(4000);

  await iframe.type('input[name="holderName"]', cardHolderName, {delay: 50});

  await iframe.type('input[name="cardNumber"]', cardNumber, {delay: 50});

  await iframe.select('select[name="month"]', cardExpiryMonth);

  await iframe.select('select[name="year"]', cardExpiryYear);

  await iframe.type('input[name="cvv"]', cardCVV, {delay: 50});

  //await page.click('button.btn.btn-strong pay__button'); -> Purchase Button

  //await sendEmail(email); -> Send Confrimation Email

  //Foward Confrimation Email from Mecklenburg



};

module.exports = bookCourt;
