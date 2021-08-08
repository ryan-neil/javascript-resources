#!/usr/bin/env node

// get access to the "file system" module
const fs = require('fs');

// call readdir function
// https://nodejs.org/api/fs.html#fs_fspromises_readdir_path_options
// syntax: fsPromises.readdir(path[, options])
fs.readdir(process.cwd(), (err, fileNames) => {
	// check if there's an error
	if (err) {
		// if error console log the error
		console.log(err);
	}
	console.log(fileNames);
});
