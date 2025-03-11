require('dotenv').config()

console.log(process.env.API_KEY)

const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-pro-api-key': process.env.API_KEY}
};

// Fetches information from CoinGecko's Demo API
fetch('https://api.coingecko.com/api/v3/derivatives', options)
    .then(res => res.json())
    .then(data => {
        data = data.filter(item => item.market === 'Binance (Futures)')
        const btcUSD = data.filter(item => item.index_id === 'BTC')
        console.log(btcUSD)
    })
    .catch(err => console.error(err));