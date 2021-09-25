require('dotenv').config();

module.exports = {
    // HOST: process.env.DB_HOST,
    // USER: process.env.USER,
    // PASSWORD: process.env.PASSWORD,
    // DB: process.env.DB_NAME,
    // dialect: process.env.DB_DIALECT,
    HOST: "",
    USER: "root",
    PASSWORD: "",
    DB: "ec_training",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }

};