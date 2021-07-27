// 1. add our dependencies
const express = require('express');
const path = require('path');

// 2. create our express app
const app = express();

// 5. middleware to serve the static directory
app.use('/static', express.static(path.resolve(__dirname, 'frontend', 'static')));

// 3. always route back to index.html
app.get('/*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
});

// 4. set environment variable "PORT", or default to "8080" (8080 is the only port working...)
app.listen(process.env.PORT || 8080, () => console.log('Server running...'));
