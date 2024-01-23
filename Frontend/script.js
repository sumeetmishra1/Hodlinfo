const tablebody= document.querySelector('#tablebody');

//rendering data 
window.addEventListener("DOMContentLoaded",async()=>{
    const response=await axios.get('/get-data');
    const allCoins=response.data.allCoins;
    for(let i=0;i<allCoins.length;i++){
        const coin=allCoins[i];
        const index=coin.id;
        const name=coin.name;
        const last_price=coin.last_price;
        const buy_price=coin.buy_price;
        const sell_price=coin.sell_price;
        const base_unit=coin.base_unit;
        const volume=coin.volume;
        const childHTMl=`
        <tr>
        <td>${index}</td>
        <td>${name}</td>
        <td>${last_price}</td>
        <td>${buy_price}</td>
        <td>${sell_price}</td>
        <td>${volume}</td>
        <td>${base_unit}</td>
    </tr>
        `
        tablebody.innerHTML+=childHTMl;
    }
})