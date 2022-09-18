const axios = require('axios');
const bungieUsername = "dexTdoug"
const bungieUsercode = 6717
const apiKey = process.env.APIKEY

let options = {
    host: 'www.bungie.net',
    path: '/Platform/Destiny2/SearchDestinyPlayer/-1/dexTdoug%236717',
    headers: { 'x-api-key': apiKey }
};

async function getUserInfo() {
    try {
        console.log('enter')
        const res = await axios.get(`https://${options.host + options.path}`, {
            headers: {
                'x-api-key': apiKey
            }
        });
        console.log(res.data)
    } catch (err) {
        console.log(err)
    }
}

getUserInfo()