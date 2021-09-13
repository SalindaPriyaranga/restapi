module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING(30),
            unique: true,
            allowNull: false,
        },
        status: {
            type: Sequelize.BOOLEAN ,
            unique: true,
            allowNull: false,
        }


    })
    return User;
}