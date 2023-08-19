// models/Task.js
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('task', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
  });

const Task = sequelize.define('Task', {
  heading: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Task;
