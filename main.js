const axios = require('axios');

const getExchangeRate = (fromCurrency, toCurrency) =>{
    axios.get ('http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1')
    .then((res)=>{
        const rate = res.data.rates;
        const euro = 1 / rate[fromCurrency];
        const exchangeRate = euro * rate[toCurrency]


        console.log(exchangeRate);
    })
}

getExchangeRate('USD', 'EUR')