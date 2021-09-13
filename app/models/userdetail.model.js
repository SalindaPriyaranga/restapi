module.exports = (sequelize, Sequelize) => {
    const UserDetail = sequelize.define("userdetail", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
       nameen: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
        },
        namesi: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
        }, 
        nameta: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
        },
        dob: {
            type: Sequelize.DATEONLY,
        
            allowNull: false,
        },
        salary: {
            type: Sequelize.DECIMAL(10, 2),
            
            allowNull: false,
        },
        specialreq: {
            type: Sequelize.STRING ,
            unique: true,
            allowNull: false,
        }


    })
    return UserDetail ;
}