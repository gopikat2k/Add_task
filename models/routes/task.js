// routes/task.js
const express = require('express');
const { Task } = require('../models');

const router = express.Router();

var database = require('../database');

router.post('/', async (req, res) => {
  try {
    const { heading, description, date, time, image } = req.body;
    const task = await Task.create({ heading, description, date, time, image });
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;



