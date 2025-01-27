const { Sequelize } = require("sequelize");

const db=new Sequelize("db","root","Admin@123",{
    host: "localhost",
    dialect:"mysql"
})
module.exports = db