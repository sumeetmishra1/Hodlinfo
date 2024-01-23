const Sequelize= require('sequelize');
const sequelize= require('../utils/database');
const Coin=sequelize.define('coin',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    last_price:Sequelize.INTEGER,
    buy_price:Sequelize.INTEGER,
    sell_price:Sequelize.INTEGER,
    volume:Sequelize.INTEGER,
    base_unit:Sequelize.STRING

})
module.exports=Coin;