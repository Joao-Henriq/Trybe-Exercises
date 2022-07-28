const { Certificate } = require('crypto');
const fetch = require('node-fetch');


// const getCurrencyCryptos = async () => {
//   const url = 'https://api.coincap.io/v2/assets';

//   const myObject = {
//     method: 'GET',
//     headers: { 'Accept': 'application/json' }
//   };

//   const coins = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.data)
//     .catch((error) => error.toString());
  
//   return coins;
  
// }

// const showCryptos = async () => {
//   const coins = await getCurrencyCryptos();

//   const coinsList = document.getElementById('ula');

//   coins.forEach((coin) => {
//     const createLi = document.createElement('li');
    
//     const usdPrice = Number(coin.priceUsd);

//     createLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;
    
//     coinsList.appendChild(createLi);  
//   });
// }
// window.onload = () => showCryptos();

const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  return coins;
}

const setCoins = async () => {
  const coins = await fetchCoins();

  const coinsList = document.getElementById('coins-list');

  coins.forEach((coin) => {
    const newLi = document.createElement('li');
    const usdPrice = Number(coin.priceUsd);

    newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;

    coinsList.appendChild(newLi);
  });
}

window.onload = () => setCoins();