// config/db.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql', // ✅ changed from 'postgres' to 'mysql'
    port: process.env.DB_PORT || 3306,
    logging: false,
  }
);

sequelize.authenticate()
  .then(() => console.log('✅ DB connected'))
  .catch(err => console.log('❌ DB connection error:', err));

module.exports = sequelize;
