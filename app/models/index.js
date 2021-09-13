const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        aquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle

    }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established succefully');
    })
    .catch(err => {
        console.err('unable to connect to the server:', err);
    })

//models (tables)

db.user = require("./user.model")(sequelize, Sequelize);
db.role = require("./role.model")(sequelize, Sequelize);
db.userdetail  = require("./userdetail.model") (sequelize, Sequelize);
db.vehicle  = require("./vehicle.model") (sequelize, Sequelize);



module.exports = db;