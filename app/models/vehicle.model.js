module.exports = (sequelize, Sequelize) => {
    const Vehicle = sequelize.define("vehicle", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        vehicletype: {
            type: Sequelize.ENUM('CAR','VAN','BUS'),
            unique: true,
            allowNull: false,
        },
        
        status: {
            type: Sequelize.BOOLEAN ,
            unique: true,
            allowNull: false,
        }


    })
    return Vehicle ;
}