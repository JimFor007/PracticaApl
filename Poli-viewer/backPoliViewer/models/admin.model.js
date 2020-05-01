module.exports = (sequelize, Sequelize) =>{
    const Admin = sequelize.define ("Admin", 
        {
            idAdmin: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true 
            },
            userName:{
                type: Sequelize.STRING,
                unique: true
            },
            password:{
                type: Sequelize.STRING,
                unique: true
            }
        }, {
            tableName: "admins"
        }
    );
    return Admin;
}