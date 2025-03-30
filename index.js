require('dotenv').config()

const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-api-key': process.env.API_KEY}
};

// Fetches information from CoinGecko's Demo API
let btcUSD = "";
let desc = "";
fetch('https://api.coingecko.com/api/v3/coins/bitcoin', options)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        console.log(typeof(data.description.en))
        desc = String(data.description.en);
        console.log(desc)
        console.log(data.market_data.current_price.usd)


        btcUSD = String(data.market_data.current_price.usd)
        console.log(btcUSD)

        console.log(data.market_data.low_24h.usd)
        console.log(data.market_data.high_24h.usd)
        // market_data.ath
        // market_data.ath_date
        // market_data.atl
        displayBitcoinPrice(btcUSD);
        

    })  
    .catch(err => console.error(err));

// TODO - This is wrong. Node.js doesn't have DOM objects
// Look into using cron 
function displayBitcoinPrice(btcUSD){
    let descElement = document.getElementById("desc");
    console.log(desc)
    descElement.innerHTML = desc;
    let priceElement = document.getElementById("price");
    console.log("hey" + btcUSD)

    priceElement.innerHTML = btcUSD;
    
}
// Waits for the DOM to load before changing elements values
// window.onload = function() {
//     displayBitcoinPrice(); 
// };