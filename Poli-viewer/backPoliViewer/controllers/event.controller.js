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
        descripcion: req.body.duracion,
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
//EXPORTS
exports.createEvent= createEvent;
    