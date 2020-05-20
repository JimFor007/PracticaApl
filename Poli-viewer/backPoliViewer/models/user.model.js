module.exports = (sequelize, Sequelize) =>{
    const User = sequelize.define ("User", 
        {
            idUser: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true 
            },
            nombre: type = Sequelize.STRING (50),
            apellido: type = Sequelize.STRING (150),
            email:{
                type: Sequelize.STRING (80),
                unique: true
            },
            identificationNumber:{
                type: Sequelize.INTEGER,
                unique: true
            },
            student:{
                type: Sequelize.BOOLEAN
            },
            profesor:{
                type: Sequelize.BOOLEAN
            },
            invited:{
                type: Sequelize.BOOLEAN
            },
            code:{
                type: Sequelize.INTEGER,
                unique: true
            },
            career: type = Sequelize.STRING (50),
        }, {
            tableName: "users"
        }
    );
    return User;
}