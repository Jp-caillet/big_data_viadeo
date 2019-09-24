const puppeteer = require('puppeteer');
 
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try {
  
  await page.goto('https://fr.viadeo.com/fr/signin');
 //await page.goto('https://example.com/');
 //await page.focus('#signin > div > main > form > div:nth-child(2) > input[type=text]')

await page.click('#signin > div > main > form > div:nth-child(2) > input[type=text]');
await page.keyboard.type('');

await page.click('#signin > div > main > form > div:nth-child(3) > input[type=password]');
await page.keyboard.type('');

await page.click('#signin > div > main > form > button');

await page.waitForNavigation();
await page.goto('https://www.viadeo.com/fr/search/#/?page=1&q=arnaud');

const hrefs = await page.$$eval('a', as => as.map(a => a.href));
console.log(hrefs)
  await browser.close();
}
catch(error) {
  console.error(error);
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}
})();