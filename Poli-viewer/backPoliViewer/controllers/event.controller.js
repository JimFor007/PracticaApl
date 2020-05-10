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
        lugar: req.body.lugar,
        numberParticipants: req.body.numberParticipants,
        AdminIdAdmin: req.params.id
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
        let ALL_EVENTS;
        await dbManager.Event.findAll(). then(
            event => {
                delete event.createdAt,
                ALL_EVENTS = event
            }
        );
        res.send(ALL_EVENTS);    
    } catch (error) {
        console.log(error);
        res.status (500).send (
            {
                message: "ERROR, SO SORRY!!!"
            }
        );
    }
}

async function getEventById(req,res){
    try {
        const { id } = req.params;
        await dbManager.Event.findOne({where: {idEvent: id}}).then (
            event => {
                res.json(event)
            }
        );
        res.send ("------ EVENT FOUNDED -----");
    } catch (error) {
        console.log(error);
        res.status (500).send (
            {
                message: "ERROR, SO SORRY!!!"
            }
        );
    }
}

async function getEventsByAdmin(req, res){
    try {
        const { id } = req.params;
        await dbManager.Event.findAll({ where: {AdminidAdmin: id} }).then(
            event => {
                res.json(event);
            },error => console.log(error)
        );
    } catch (error) {
        console.log(error);
        res.status (500).send (
            {
                message: "ERROR, SO SORRY!!!"
            }
        );
    }
}

async function updateEvent(req, res){
    try {
        const { id } = req.params;
        await dbManager.Event.findOne ({where: {idEvent: id}}).then(
            event => {
                event.update (req.body);
            }
        ); 
        res.send("EVENT UPDATED");
    } catch (error) {
        console.log(error);
        res.status (400).send (
            {
                message: "ERROR TO UPDATE EVENT"
            }
        );
    }
}
//EXPORTS
exports.createEvent= createEvent;
exports.getAllEvents = getAllEvents;
exports.updateEvent = updateEvent;
exports.getEventById = getEventById;
exports.getEventsByAdmin = getEventsByAdmin;