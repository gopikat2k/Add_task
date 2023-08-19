const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const taskRoutes = require('./routes/task');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/api/tasks', taskRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
