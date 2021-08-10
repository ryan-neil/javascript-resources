#!/usr/bin/env node

// get access to the "file system" module
const fs = require('fs');
const path = require('path');
// npm chalk package
const chalk = require('chalk');

const { lstat } = fs.promises;

const targetDir = process.argv[2] || process.cwd();

// call readdir function
// https://nodejs.org/api/fs.html#fs_fspromises_readdir_path_options
// syntax: fsPromises.readdir(path[, options])
fs.readdir(targetDir, async (err, fileNames) => {
	// check if there's an error
	if (err) {
		// if error console log the error
		console.log(err);
	}

	// using the Promise.all method
	const statPromises = fileNames.map((fileName) => {
		return lstat(path.join(targetDir, fileName));
	});

	// allStats now has all of our stats objects inside of it
	const allStats = await Promise.all(statPromises);

	// we can now iterate over allStats
	for (let stats of allStats) {
		// we need to get the index of each stats object
		const index = allStats.indexOf(stats);

		// add styling to different files
		if (stats.isFile()) {
			console.log(chalk.greenBright(fileNames[index]));
		} else {
			console.log(chalk.bold(fileNames[index]));
		}
	}
});
