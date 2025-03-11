const API_KEY = "CG-k9JWcePKphd8DqGiccJn4r5s";

const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-pro-api-key': API_KEY}
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