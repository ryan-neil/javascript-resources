const express = require('express');
const app = express();

// index route
app.get('/', (req, res) => {
	res.send('Home page');
});

// dj, spin that sh*t...
const PORT = process.env.PORT || 9001;
app.listen(PORT, () => console.log(`Server running at: http://localhost:${PORT}`));
