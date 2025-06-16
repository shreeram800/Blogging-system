const sequelize = require('./sequelize');
const User = require('./User');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ DB connected');
    await sequelize.sync(); // creates tables if not exists
  } catch (err) {
    console.error('❌ DB connection error:', err);
  }
})();

module.exports = {
  sequelize,
  User
};
