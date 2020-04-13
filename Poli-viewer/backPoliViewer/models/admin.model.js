module.exports = (sequelize, Sequelize) =>{
    const Admin = sequelize.define ("Admin", 
        {
            idAdmin: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true 
            },
            password:{
                type: Sequelize.STRING,
                unique: true
            },
            creation_date: Sequelize.DATE,
        }, {
            tableName: "admins"
        }
    );
    return Admin;
}