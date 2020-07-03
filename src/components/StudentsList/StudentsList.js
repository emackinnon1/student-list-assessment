import React, { useState, useEffect } from "react";
import "./StudentList.css";
import StudentCard from "../StudentCard/StudentCard";

const StudentsList = ({ list }) => {
	const [searchName, setSearchName] = useState("");
	const [students, setStudents] = useState(list.students);

	const makeCards = (studentList) => {
		return studentList.map((student, i) => (
			<StudentCard key={i} {...student} />
		));
	};

	useEffect(() => {
		searchStudents(searchName);
	}, [searchName]);

	const searchStudents = (searchTerm) => {
		const result = list.students.filter((student) => {
			const fullName = `${student.firstName} ${student.lastName}`;
			if (fullName.toLowerCase().includes(searchTerm.toLowerCase())) {
				return student;
			}
		});

		setStudents(result);
	};

	return (
		<div className="student-list">
			<input
				id="name-input"
				onChange={(e) => {
					setSearchName(e.target.value);
				}}
				placeholder="Search by name"
			/>
			{makeCards(students)}
		</div>
	);
};

export default StudentsList;
