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
	tags,
	addTag,
}) => {
	const [expanded, setExpanded] = useState(false);
	const [tag, setTag] = useState("");
	const getAvgGrade = (gradeList) => {
		const total = gradeList.reduce((acc, grade) => {
			return acc + Number(grade);
		}, 0);

		return total / gradeList.length;
	};

	const allGrades = grades.map((grade, i) => (
		<p key={i}>
			Test {i + 1}: {grade}%
		</p>
	));

	const tagInput = (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				addTag(tag, id);
				setTag("");
			}}>
			<input
				value={tag}
				onChange={(e) => setTag(e.target.value)}
				id="add-tag-input"
				placeholder="Add a tag"
			/>
		</form>
	);

	const tagList = tags.map((tag, i) => (
		<div className="tag" key={i}>
			{tag}
		</div>
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
				<div className="tag-list">{expanded && tagList}</div>
				{expanded && tagInput}
			</div>
			<div onClick={() => setExpanded(!expanded)} className="expand-btn">
				{expanded ? "-" : "+"}
			</div>
		</div>
	);
};

export default StudentCard;
