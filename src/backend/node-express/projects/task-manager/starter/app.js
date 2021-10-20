const express = require('express');
const app = express();
const port = 3000;

const tasks = require('./routes/tasks.js');

// set middleware to get data in req.body
app.use(express.json());

// set routes
app.get('/', (req, res) => {
	res.send('Task Manager App');
});

// set router middleware
app.use('/api/v1/tasks', tasks);

// set server
app.listen(port, () => console.log(`Server running on: http://localhost:${port}`));
