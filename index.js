const puppeteer = require('puppeteer');
const dotenv = require('dotenv');


(async() => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    dotenv.config();


    try {
        console.log('try to connect signin')
        await page.goto('https://secure.viadeo.com/fr/signin');
        console.log('connected')

        // Identifants de connexion à Viadeo

        await page.click('#signin > div > main > form > div:nth-child(2) > input[type=text]');
        await page.keyboard.type(process.env.VIADEO_USER);
        console.log('cliqued user')


        await page.click('#signin > div > main > form > div:nth-child(3) > input[type=password]');
        await page.keyboard.type(process.env.VIADEO_PWD);
        console.log('cliqued password')

        await page.click('#signin > div > main > form > button');
        console.log('wait for redirection')
        const navigationPromise = page.waitForNavigation();

        try {
            await navigationPromise
        } catch (e) {
            console.log('ueue ca beug')
        }
        console.log(hrefs.length)
        while (hrefs.length == 0) {
            // Terme de la recherche
            let value = "arnaud";
            // Requête de la recherche
            console.log('try to connect search')

            await page.goto("https://www.viadeo.com/fr/search/#/?q=arnaud");
            console.log('connected to search')

            // Récupération du lien des comptes
            const hrefs = await page.$$eval('h2 > a', as => as.map(a => a.href));
            console.log('Liens de profils pour: ' + value + "\n", hrefs);
        }
        await browser.close();
    } catch (error) {
        console.error(error);
        // expected output: ReferenceError: nonExistentFunction is not defined
        // Note - error messages will vary depending on browser
    }
})();