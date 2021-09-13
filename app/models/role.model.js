module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("role", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        rolename: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
        
        },
        status: {
            type: Sequelize.BOOLEAN ,
            unique: true,
            allowNull: false,
        }


    })
    return Role;
}