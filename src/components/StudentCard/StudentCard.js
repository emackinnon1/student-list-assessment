import React from "react";
import "./StudentCard.css";

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
	const getAvgGrade = (gradeList) => {
		const total = gradeList.reduce((acc, grade) => {
			return acc + Number(grade);
		}, 0);

		return total / gradeList.length;
	};

	return (
		<div className="student-card">
			<img src={pic} alt="student-avatar" />
			<div className="student-info">
				<h1>{`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}</h1>
				<p>Email: {email}</p>
				<p>Company: {company}</p>
				<p>Skill: {skill}</p>
				<p>Average: {getAvgGrade(grades)}%</p>
			</div>
		</div>
	);
};

export default StudentCard;
