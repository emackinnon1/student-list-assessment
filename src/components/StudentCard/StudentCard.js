import React from "react";

const StudentCard = ({
	city,
	company,
	email,
	firstName,
	grades,
	id,
	lastName,
	pic,
	skill,
}) => {
	const image = pic;

	const getAvgGrade = (gradeList) => {
		const total = gradeList.reduce((acc, grade) => {
			return acc + Number(grade);
		}, 0);

		return total / gradeList.length;
	};

	console.log(getAvgGrade(grades));

	return (
		<div className="student-card">
			<img src={image} alt="student-avatar" />
			<h1>{`${firstName} ${lastName}`}</h1>
			<p>Email: {email}</p>
			<p>Company: {company}</p>
			<p>Skill: {skill}</p>
			<p>Average: {getAvgGrade(grades)}%</p>
		</div>
	);
};

export default StudentCard;
