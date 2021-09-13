module.exports = {
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