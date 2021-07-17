// add our dependencies
const express = require('express');
const path = require('path');

// create our express app
const app = express();

// middleware to serve the static directory
app.use('/static', express.static(path.resolve(__dirname, 'frontend', 'static')));

// always route back to index.html
app.get('/*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
});

// set environment variable "PORT", or default to "8080"
// * 8080 is the only port working...
app.listen(process.env.PORT || 8080, () => console.log('Server running...'));
