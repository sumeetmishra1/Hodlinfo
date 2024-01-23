const coin=require('../models/coin');
const axios=require('axios');


//For getting data from the database and sending to the frontend
exports.showCoins=async(req,res)=>{
    try{
        const response=await coin.findAll();
        res.status(200).json({allCoins:response});
    }
   
    catch(e){
        res.status(404).json({message:e.message});
    }
}





// For getting data from API and Storing in database
exports.getCoins=async(req,res)=>{
    try{
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
        const data=response.data;
        for(detail in data){
            const arr=data[detail]
            await coin.create({
                name:arr.name,
                last_price:arr.last,
                buy_price:arr.buy,
                sell_price:arr.sell,
                volume:arr.volume,
                base_unit:arr.base_unit
            })
        }
    }
    catch(e){
        console.log(e.message)
    }
}