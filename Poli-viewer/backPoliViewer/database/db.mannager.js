//IMPORT SEQUELIZE
const Sequelize = require("sequelize");
//IMPORT SEQUELIZE CONNECTION
const sequelizeConnection = require('./db.connection');

//IMPORT MODELS
const UserModel = require("../models/user.model");
const eventModel = require("../models/event.model");
const adminModel = require("../models/admin.model");
const placeModel = require("../models/place.model");

//INITIALIZE MODELS
const User = UserModel (sequelizeConnection, Sequelize);
const Event = eventModel (sequelizeConnection, Sequelize);
const Admin = adminModel (sequelizeConnection, Sequelize);
const Place = placeModel (sequelizeConnection, Sequelize);
//CREATE RELATIONS BETWEEN MODELS

//GROUP MODELS
const models = {
  User: User,
  Event: Event,
  Admin: Admin,
  Place: Place
};


/**
 * Create object to manage the models and database
 */
const db = {
    ...models,
    sequelizeConnection
};
  
// EXPORT CONSTANT DB
module.exports = db;