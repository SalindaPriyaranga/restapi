const dbConfig = require('../config/db.config.js');
const Sequelize = require('sequelize');


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
        console.log('unable to connect to the server:', err);
    })

//models (tables)

db.user = require("./user.model")(sequelize, Sequelize);
db.role = require("./role.model")(sequelize, Sequelize);
db.userdetail = require("./userdetail.model")(sequelize, Sequelize);
db.vehicle = require("./vehicle.model")(sequelize, Sequelize);

//many to many(user-role)
db.user.belongsToMany(db.role, {
    through: "user_role",
    as: "roles",
    foreignKey: "role_id",

});
db.role.belongsToMany(db.user, {
    through: "user_role",
    as: "users",
    foreignKey: "user_id",

});
//many to one (user-vehicle)
db.user.hasMany(db.vehicle);
db.vehicle.belongsTo(db.user);

//one to one
db.user.hasOne(db.userdetail, {});
db.userdetail.belongsTo(db.user);



module.exports = db;