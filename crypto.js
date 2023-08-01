fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,usd_24h_change')
.then(response => response.json())
.then(data => {
  const btcPriceInUsd = data.bitcoin.usd.toFixed(2);
  const change24h = data.bitcoin.usd_24h_change.toFixed(2);
  const changeColor = change24h > 0 ? 'green' : 'red';

  document.getElementById("btcPrice").innerHTML = `Текущая цена биткоина: ${btcPriceInUsd} USD`;
  document.getElementById("btcChange").innerHTML = `24h Изменение: <span style="color:${changeColor}">${change24h}%</span>`;
});
