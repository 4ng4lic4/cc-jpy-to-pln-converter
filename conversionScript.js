(() => {
    function convertToPLN(rates) {
        const prices = document.getElementsByClassName("figure");
        for (let i = 0; len = prices.length, i< len; i++){
           const price_before = prices[i].textContent;
           const price_after = Math.round((Number(price_before.replace(',', "").slice(0,-1)))*rates*100)/100 + ' PLN';
           prices[i].textContent = price_after;
        };
    };

    const api_url = "https://api.nbp.pl/api/exchangerates/rates/a/jpy/?format=json";
    fetch(api_url)
        .then((response) => response.json())
        .then((json) => convertToPLN(json.rates[0]["mid"]));
})();