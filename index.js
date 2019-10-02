const puppeteer = require('puppeteer');
const dotenv = require('dotenv');
const axios = require('axios');

(async() => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    dotenv.config();
    let hrefs = [];

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    try {
        const listName = await axios.get('http://localhost:4000/name/shows')
        let CurrentName = await axios.get('http://localhost:4000/name/showOne')
        console.log(CurrentName.data.prenom)


        await page.goto('https://secure.viadeo.com/fr/signin');


        //await page.goto('https://example.com/');
        //await page.focus('#signin > div > main > form > div:nth-child(2) > input[type=text]')

        // Identifants de connexion à Viadeo
        const navigationPromise = page.waitForNavigation();
        await page.click('#signin > div > main > form > div:nth-child(2) > input[type=text]');

        await page.keyboard.type(process.env.VIADEO_USER);



        await page.click('#signin > div > main > form > div:nth-child(3) > input[type=password]');
        await page.keyboard.type(process.env.VIADEO_PWD);


        await page.click('#signin > div > main > form > button');
        console.log('wait for redirection')
        try {
            await navigationPromise
        } catch (e) {
            console.log('ueue ca beug')
        }
        await sleep(15000);
        let nb_try = 0;
        while(true) {
            CurrentName = await axios.get('http://localhost:4000/name/showOne')
        axios.post('http://localhost:4000/name/delete', {
                            name: CurrentName.data.prenom
                        })
                        .then(function(response) {
                            // console.log(response);
                        })
                        .catch(function(error) {
                            // console.log("error");
                        });

            nb_try = 0
            hrefs = []

            while (hrefs.length == 0 && nb_try < 3) {
                await sleep(2000);
                // Requête de la recherche

                await page.goto(`https://www.viadeo.com/fr/search/#/?page=1&q=${CurrentName.data.prenom}`);


                // Récupération du lien des comptes
                hrefs = await page.$$eval('h2 > a', as => as.map(a => a.href));
                console.log('nb_try page 1 :' + nb_try)
                if (hrefs.length != 0) {
                    console.log(`page 1: ${CurrentName.data.prenom}`)

                    axios.post('http://localhost:4000/url/create', {
                            url: hrefs[0]
                        })
                        .then(function(response) {
                            // console.log(response);
                        })
                        .catch(function(error) {
                            // console.log("error");
                        });
                    axios.post('http://localhost:4000/url/create', {
                            url: hrefs[1]
                        })
                        .then(function(response) {
                            // console.log(response);
                        })
                        .catch(function(error) {
                            // console.log("error");
                        });
                    axios.post('http://localhost:4000/url/create', {
                            url: hrefs[2]
                        })
                        .then(function(response) {
                            // console.log(response);
                        })
                        .catch(function(error) {
                            // console.log("error");
                        });
                    axios.post('http://localhost:4000/url/create', {
                            url: hrefs[3]
                        })
                        .then(function(response) {
                            // console.log(response);
                        })
                        .catch(function(error) {
                            // console.log("error");
                        });
                    axios.post('http://localhost:4000/url/create', {
                            url: hrefs[4]
                        })
                        .then(function(response) {
                            // console.log(response);
                        })
                        .catch(function(error) {
                            // console.log("error");
                        });
                    axios.post('http://localhost:4000/url/create', {
                            url: hrefs[5]
                        })
                        .then(function(response) {
                            // console.log(response);
                        })
                        .catch(function(error) {
                            // console.log("error");
                        });
                    axios.post('http://localhost:4000/url/create', {
                            url: hrefs[6]
                        })
                        .then(function(response) {
                            // console.log(response);
                        })
                        .catch(function(error) {
                            // console.log("error");
                        });
                    axios.post('http://localhost:4000/url/create', {
                            url: hrefs[7]
                        })
                        .then(function(response) {
                            // console.log(response);
                        })
                        .catch(function(error) {
                            // console.log("error");
                        });
                    axios.post('http://localhost:4000/url/create', {
                            url: hrefs[8]
                        })
                        .then(function(response) {
                            // console.log(response);
                        })
                        .catch(function(error) {
                            // console.log("error");
                        });
                    axios.post('http://localhost:4000/url/create', {
                            url: hrefs[9]
                        })
                        .then(function(response) {
                            // console.log(response);
                        })
                        .catch(function(error) {
                            // console.log("error");
                        });
                }
                nb_try++;
            }

            hrefs = []
            nb_try = 0
            while (hrefs.length == 0 && nb_try < 3) {
                // Terme de la recherche
                let value = "arnaud";
                // Requête de la recherche

                await sleep(2000);
                await page.goto(`https://www.viadeo.com/fr/search/#/?page=2&q=${CurrentName.data.prenom}`);



                // Récupération du lien des comptes
                hrefs = await page.$$eval('h2 > a', as => as.map(a => a.href));
                console.log('nb_try page 2 :' + nb_try)


                if (hrefs.length != 0) {
                    console.log(`page 2: ${CurrentName.data.prenom}`)
                    axios.post('http://localhost:4000/url/create', {
                            url: hrefs[0]
                        })
                        .then(function(response) {
                            //console.log(response);
                        })
                        .catch(function(error) {
                            //console.log("error");
                        });
                    axios.post('http://localhost:4000/url/create', {
                            url: hrefs[1]
                        })
                        .then(function(response) {
                            // console.log(response);
                        })
                        .catch(function(error) {
                            // console.log("error");
                        });
                    axios.post('http://localhost:4000/url/create', {
                            url: hrefs[2]
                        })
                        .then(function(response) {
                            // console.log(response);
                        })
                        .catch(function(error) {
                            // console.log("error");
                        });
                    axios.post('http://localhost:4000/url/create', {
                            url: hrefs[3]
                        })
                        .then(function(response) {
                            // console.log(response);
                        })
                        .catch(function(error) {
                            // console.log("error");
                        });
                    axios.post('http://localhost:4000/url/create', {
                            url: hrefs[4]
                        })
                        .then(function(response) {
                            // console.log(response);
                        })
                        .catch(function(error) {
                            // console.log("error");
                        });
                    axios.post('http://localhost:4000/url/create', {
                            url: hrefs[5]
                        })
                        .then(function(response) {
                            // console.log(response);
                        })
                        .catch(function(error) {
                            // console.log("error");
                        });
                    axios.post('http://localhost:4000/url/create', {
                            url: hrefs[6]
                        })
                        .then(function(response) {
                            // console.log(response);
                        })
                        .catch(function(error) {
                            // console.log("error");
                        });
                    axios.post('http://localhost:4000/url/create', {
                            url: hrefs[7]
                        })
                        .then(function(response) {
                            // console.log(response);
                        })
                        .catch(function(error) {
                            // console.log("error");
                        });
                    axios.post('http://localhost:4000/url/create', {
                            url: hrefs[8]
                        })
                        .then(function(response) {
                            // console.log(response);
                        })
                        .catch(function(error) {
                            // console.log("error");
                        });
                    axios.post('http://localhost:4000/url/create', {
                            url: hrefs[9]
                        })
                        .then(function(response) {
                            // console.log(response);
                        })
                        .catch(function(error) {
                            // console.log("error");
                        });
                }
                nb_try++;

            }

        }


        await browser.close();
    } catch (error) {
        console.error(error);
        // expected output: ReferenceError: nonExistentFunction is not defined
        // Note - error messages will vary depending on browser
    }
})();