const dbManager = require('../database/db.mannager');
/*
    Create a new event
*/
// CHECK IF THE REQUEST BODY IS EMPTY
async function createAdmin(req,res){
    if(!req.body){
        res.status (400).send(
            {   
                message: "REQUEST IS EMPTY!"
            }
        );
        return;
}
// CREATING THE OBJECT TO PERSIST
    const newAdminObject = {
        userName: req.body.userName,
        password: req.body.password
    }
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    dbManager.Admin.create(newAdminObject).then (
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

async function getAllAdmins(req, res){
    try {
        const ALL_ADMINS = await dbManager.Admin.findAll ();
        res.json(ALL_ADMINS);    
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
exports.createAdmin = createAdmin;
exports.getAllAdmins = getAllAdmins;
    