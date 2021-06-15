fetch(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1"
).then((res) =>
  res.json().then((data) => {
    data.map((value) => {
      console.log(value.name);
      $("#dataContainer").append(`
      <tr>
      <th scope="row">${value.market_cap_rank}</th>
      <td><span class="name_logo_img"><img src=${value.image}></span>
      <a href="#" style="text-decoration: none;" onclick="innerPage(this)" id="tokens-a">${value.name}</a> 
      <span class="short_btc">${value.symbol.toUpperCase()}</span></td>
      <td>$ ${value.market_cap}</td>
      <td>$ ${value.current_price}</td>
      <td style="color:red;">${value.price_change_percentage_24h}%</td>
      <td>$ ${value.total_volume}  <span class="volume_d">${value.market_cap_change_24h}   ${value.symbol.toUpperCase()}</span></td>
      <td>${value.circulating_supply.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ${value.symbol.toUpperCase()}</td>
      </tr>
`)
    });

    $(".tablemanager").tablemanager({
        debug: true,
        pagination: true,
        showrows: [5 , 10 , 20 , 50 , 100],
    })


  })
);


