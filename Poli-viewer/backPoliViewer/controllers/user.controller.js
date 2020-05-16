var nodemailer = require('nodemailer');

const dbManager = require('../database/db.mannager');


/*
    Create a new user
*/

async function createUser(req, res) {
    // CHECK IF THE REQUEST BODY IS EMPTY
    if (!req.body) {
        res.status(400).send(
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
    dbManager.User.create(newUserObject).then(
        data => {
            res.send(data);
        }
    ).catch(
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

async function getAllUsers(req, res) {
    try {
        const ALL_USERS = await dbManager.User.findAll();

        res.send(
            {
                data: ALL_USERS
            }
        );
    } catch (error) {
        console.log(error);
        res.status(500).send(
            {
                message: "ERROR, SO SORRY!!!"
            }
        );
    }
}

async function sendEmail(req, res) {
    let user = req.body;
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: 'poli.viewer.web@gmail.com', // generated ethereal user
            pass: 'poliviewer2020-1', // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: '"THE BEST WEB APP"<poli.viewer.web@gmail.com>',
        to: user.email,
        subject: "Inscripción a evento exitosa",
        html: `<h1> SU INSCRIPCIÓN AL EVENTO SE HA REALIZADO SATISFACTORIAMENTE </h1> <br>
        <h3>Podra asistir al evento, dando su numero de identificación al personal de logistica del evento.</h3> <br>
        <h4> Gracias por usar nuestro aplicativo. </h4>`
    };

    try {
        await transporter.sendMail(mailOptions, function (error, info) {
            console.log("senMail returned!");
            if (error) {
              console.log("ERROR!!!!!!", error);
            } else {
              console.log('Email sent: ' + info.response);
              res.send ("------ mail send ------");
            }
          });
    } catch (error) {
        console.error (error);
    }

}

//EXPORTS

exports.createUser = createUser;
exports.getAllUsers = getAllUsers;
exports.sendEmail = sendEmail;
