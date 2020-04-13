module.exports = (sequelize, Sequelize) =>{
    const Place = sequelize.define ("Place", 
        {
            idPlace: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true 
            },
            nombre:{
                type: Sequelize.INTEGER,
                unique: true
            },
            capacidad:{
                type: Sequelize.INTEGER,
            },
            creation_date: Sequelize.DATE,
        }, {
            tableName: "places"
        }
    );
    return Place;
}