module.exports = (sequelize, Sequelize) =>{
    const User = sequelize.define ("User", 
        {
            idUser: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true 
            },
            cc:{
                type: Sequelize.INTEGER,
                unique: true
            },
            codigo:{
                type: Sequelize.INTEGER,
                unique: true
            },
            nombre: {
                type: Sequelize.STRING,
                unique: true
            },
            apellido:{
                type: Sequelize.STRING,
                unique: true
            },
            member:{
                type: Sequelize.INTEGER
            },
            student:{
                type: Sequelize.INTEGER
            },
            profesor:{
                type: Sequelize.INTEGER
            },
            administrative:{
                type: Sequelize.INTEGER
            },
            phone:{
                type: Sequelize.INTEGER,
                unique: true
            },
            email:{
                type: Sequelize.STRING,
                unique: true
            },
            creation_date: Sequelize.DATE,
        }, {
            tableName: "users"
        }
    );
    return User;
}