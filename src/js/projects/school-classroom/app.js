// https://dev.to/damcosset/higher-order-functions-in-javascript-4j8b

const grades = [
	{ name: 'John', grade: 86, sex: 'M' },
	{ name: 'Sarah', grade: 92, sex: 'F' },
	{ name: 'Bob', grade: 94, sex: 'M' },
	{ name: 'Jane', grade: 78, sex: 'F' }
];

let isBoy = student => {
	return student.sex === 'M';
};

let isGirl = student => {
	return student.sex === 'F';
};

let getBoys = grades => {
	return grades.filter(isBoy);
};

let getGirls = grades => {
	return grades.filter(isGirl);
};

let average = grades => {
	return (
		grades.reduce((acc, curr) => acc + curr.grade, 0) /
		grades.length
	);
};

let maxGrade = grades => {
	return Math.max(
		...grades.map(student => {
			return student.grade;
		})
	);
};

let minGrade = grades => {
	return Math.min(...grades.map(student => student.grade));
};

let classroomAverage = average(grades); // 87.5
let boysAverage = average(getBoys(grades)); // 90
let girlsAverage = average(getGirls(grades)); // 85
let highestGrade = maxGrade(grades); // 94
let lowestGrade = minGrade(grades); // 78
let highestBoysGrade = maxGrade(getBoys(grades)); // 94
let lowestBoysGrade = minGrade(getBoys(grades)); // 86
let highestGirlsGrade = maxGrade(getGirls(grades)); // 92
let lowestGirlsGrade = minGrade(getGirls(grades)); // 78
