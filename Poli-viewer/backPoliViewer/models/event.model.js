module.exports = (sequelize, Sequelize) =>{
    const Event = sequelize.define ("Event", 
        {
            idEvent: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true 
            },
            nombre:{
                type: Sequelize.STRING (40),
                unique: true
            },
            duracion: type = Sequelize.INTEGER,
            descripcion: type = Sequelize.STRING (1000),
            virtual: type= Sequelize.BOOLEAN,
            lugar: type = sequelize.STRING (50),
            numberParticipants: type = Sequelize.INTEGER
        }, {
            tableName: "events"
        }
    );
    return Event;
}