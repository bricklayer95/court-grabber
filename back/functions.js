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

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

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

module.exports = {formatDate, getRandomItem};