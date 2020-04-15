const dbManager = require('../database/db.mannager');


/*

    Create a new user
*/

// CHECK IF THE REQUEST BODY IS EMPTY
async function createUser(req,res){
    if(!req.body){
        res.status (400).send(
            {   
                message: "REQUEST IS EMPTY!"
            }
        );
        return;
}
// CREATING THE OBJECT TO PERSIST
    const newUserObject = {
        cc: req.body.cc,
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        member: req.body.member,
        student: req.body.student,
        profesor: req.body.profesor,
        administrative: req.body.administrative,
        phone: req.body.phone,
        email: req.body.email
    }
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    dbManager.User.create(newUserObject).then (
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

exports.createUser= createUser;
    