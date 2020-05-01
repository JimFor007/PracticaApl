const dbManager = require('../database/db.mannager');
/*
    Create a new event
*/
// CHECK IF THE REQUEST BODY IS EMPTY
async function createEvent(req,res){
    if(!req.body){
        res.status (400).send(
            {   
                message: "REQUEST IS EMPTY!"
            }
        );
        return;
}
// CREATING THE OBJECT TO PERSIST
    const newEventObject = {
        nombre: req.body.nombre,
        duracion: req.body.duracion,
        descripcion: req.body.descripcion,
        virtual: req.body.virtual,
    }
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    dbManager.Event.create(newEventObject).then (
        data => {
            res.send (data);
        }
    ).catch (
        e => {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
    );
}

async function getAllEvents(req, res){
    try {
        const ALL_EVENTS = await dbManager.Event.findAll ();
        res.json(ALL_EVENTS);    
    } catch (error) {
        console.log(error);
        res.status (500).send (
            {
                message: "ERROR, SO SORRY!!!"
            }
        );
    }
}
//EXPORTS
exports.createEvent= createEvent;
exports.getAllEvents = getAllEvents;
    