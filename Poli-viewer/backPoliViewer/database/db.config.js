/**
 * Database Configuration Object
 */
const dbconfig = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "MichelleMRO*2",
    DB: "practicaapl",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
module.exports = dbconfig;
