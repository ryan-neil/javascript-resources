// Hourly Wage Calculator
/* 
- Take [annual salary] and divide that by work days in a year [240].
- Create const variable for work hours per day -> 8.
- Return hourly rate.
*/

function hourlyWage(annualSalary) {
	let userDays = '120'; // 120
	let userHours = '8'; // 8

	const workDays = userDays;
	const workHours = userHours;

	return `Your hourly rate is: $${Math.floor(
		annualSalary / workDays / workHours
	)}/hour`;
}
hourlyWage(82000); // "Your hourly rate is: $85/hour"
