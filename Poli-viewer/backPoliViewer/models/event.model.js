module.exports = (sequelize, Sequelize) =>{
    const Event = sequelize.define ("Event", 
        {
            idEvent: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true 
            },
            nombre:{
                type: Sequelize.STRING,
                unique: true
            },
            duracion:{
                type: Sequelize.INTEGER
            },
            descripcion: {
                type: Sequelize.STRING
            },
            virtual:{
                type: Sequelize.BOOLEAN
            },
            creation_date: Sequelize.DATE,
        }, {
            tableName: "events"
        }
    );
    return Event;
}