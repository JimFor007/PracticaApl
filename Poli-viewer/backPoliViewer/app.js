var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var eventsRouter = require('./routes/event.route');
var adminRouter = require('./routes/admin.route');

const dbManager = require ('./database/db.mannager');

var app = express();

app.listen ('3030');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/events', eventsRouter);
app.use('/admin', adminRouter);

dbManager.sequelizeConnection.authenticate ().then (
    () => {
        console.log("********** CONECCTION ESTABLISHED ***********");
        dbManager.sequelizeConnection.sync ().then(
            () => {
                console.log("Database synced!!!");
            }
        );
    }
).catch (
    err => {
        console.log("UNNABLE CONECT TO DATABASE");
    }
);

module.exports = app;
