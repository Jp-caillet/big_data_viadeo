const puppeteer = require('puppeteer');
// const dotenv = require('dotenv');

//console.log("MY USERNAME", VIADEO_USERNAME);

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try {
  
  await page.goto('https://secure.viadeo.com/fr/signin');
 //await page.goto('https://example.com/');
 //await page.focus('#signin > div > main > form > div:nth-child(2) > input[type=text]')

// Identifants de connexion à Viadeo
await page.click('#signin > div > main > form > div:nth-child(2) > input[type=text]');
await page.keyboard.type('');

await page.click('#signin > div > main > form > div:nth-child(3) > input[type=password]');
await page.keyboard.type('');

await page.click('#signin > div > main > form > button');

await page.waitForNavigation();

// Terme de la recherche
let value = "arnaud";
// Requête de la recherche
await page.goto("https://www.viadeo.com/fr/search/#/?q="+ value, { timeout: 0, waitUntil: "networkidle0" });

// Récupération du lien des comptes
const hrefs = await page.$$eval('div > div > h2 > a', as => as.map(a => a.href));
console.log('Liens de profils pour: '+ value + "\n", hrefs);

  await browser.close();
}
catch(error) {
  console.error(error);
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}
})();
