const bungieUsername = "dexTdoug"
const bungieUsercode = 6717

async function getResponse() {
    const response = await fetch(
        `https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/-1/g%236717`,
        {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'carbonfootprint1.p.rapidapi.com',
                'x-rapidapi-key': 'your_api_key'
            }
        }
    );
    const data = await response.json(); // Extracting data as a JSON Object from the response
}
