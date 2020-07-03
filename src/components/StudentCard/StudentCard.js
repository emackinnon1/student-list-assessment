import React, { useState } from "react";
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
	const [expanded, setExpanded] = useState(false);
	const getAvgGrade = (gradeList) => {
		const total = gradeList.reduce((acc, grade) => {
			return acc + Number(grade);
		}, 0);

		return total / gradeList.length;
	};

	const allGrades = grades.map((grade, i) => (
		<p>
			Test {i + 1}: {grade}%
		</p>
	));

	return (
		<div className="student-card">
			<img src={pic} alt="student-avatar" />
			<div className="student-info">
				<h1>{`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}</h1>
				<p>Email: {email}</p>
				<p>Company: {company}</p>
				<p>Skill: {skill}</p>
				<p>Average: {getAvgGrade(grades)}%</p>
				{expanded && allGrades}
			</div>
			<div onClick={() => setExpanded(!expanded)} className="expand-btn">
				{expanded ? "-" : "+"}
			</div>
		</div>
	);
};

export default StudentCard;
