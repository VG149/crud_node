const Sequelize = require('sequelize');

const sequelize = new Sequelize('projeweb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

// Create the db object to export
const db = {
    sequelize: sequelize,
    Sequelize: Sequelize
};

module.exports = db;  // Export the db object
