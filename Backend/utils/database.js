const Sequelize=require('sequelize');

const sequelize=new Sequelize(process.env.DB_NAME,process.env.SQL_USER_NAME,process.env.SQL_PASSWORD,{
    dialect:'mysql',
    host:'localhost',
})
module.exports=sequelize;