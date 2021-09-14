// 0. load .env file
// check if we are running in the production env
// if (process.env.NODE_ENV !== 'development') {
// 	// run code to load up those different dependencies
// 	// .load() loads all the .env variables and import them into our process.env variable in our app
// 	require('dotenv').config();
// }
const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/.env' });
console.log(process.env.DATABASE_URL);

// 1. import in packages
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

// 7. import our router from index.js
const indexRouter = require('./routes/index');

// 2. set view engine
app.set('view engine', 'ejs');
// 3. set where our views are coming from
app.set('views', __dirname + '/views');
// 4. hook up express layouts
// every file will be put inside of this file, this way we don't have to duplicate the HTML code (header, footer, etc)
app.set('layout', 'layouts/layout');
// 4.1 tell our app to use express layouts
app.use(expressLayouts);
// 5. tell express where our public files are going to be (style sheets, javascript, images)
app.use(express.static('public'));

// 9. import MongoDB database (npm i mongoose)
const mongoose = require('mongoose');
// 9.1 set up our connection for the database
// * we never want to hard-code our connection, it should be dependent on the env
// * when we're developing we want mongo to connect to our local MongoDB server
// * when the app is deployed we want to connect to a server that's on the web somewhere
// * for our app we'll pass a string for the URL which will come from our env variables and then options for how we want to setup MongoDB
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true
});
// 9.2 log if we are or are not connected to our database
const db = mongoose.connection;
// * if we run into an error, print out the error
db.on('error', (error) => console.error(error));
// * only going to run 1 time, open the db for the first time (connect)
db.once('open', () => console.log('Connected to Mongoose!'));

// 8. tell our app to use the index router
app.use('/', indexRouter);

// 6. Tell our app to listen to PORT 3000
app.listen(process.env.PORT || 3000);
