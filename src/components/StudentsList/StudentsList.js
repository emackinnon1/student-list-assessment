import React, { useState, useEffect } from "react";
import "./StudentList.css";
import StudentCard from "../StudentCard/StudentCard";

const StudentsList = ({ list, addTag }) => {
	const [searchName, setSearchName] = useState("");
	const [tagSearchTerm, setTagSearchTerm] = useState("");
	const [students, setStudents] = useState(list.students);

	const makeCards = (studentList) => {
		return studentList.map((student, i) => (
			<StudentCard key={i} {...student} addTag={addTag} />
		));
	};

	useEffect(() => {
		searchStudents(searchName);
	}, [searchName]);

	useEffect(() => {
		searchByTag(tagSearchTerm);
	}, [tagSearchTerm]);

	useEffect(() => {
		setStudents(list.students);
	}, [list]);

	const searchStudents = (searchTerm) => {
		const result = list.students.filter((student) => {
			const fullName = `${student.firstName} ${student.lastName}`;
			if (fullName.toLowerCase().includes(searchTerm.toLowerCase())) {
				return student;
			}
		});

		setStudents(result);
	};

	const searchByTag = (searchTerm) => {
		const result = students.filter((student) => {
			if (student.tags.length > 0) {
				const total = student.tags.reduce((acc, tag) => acc + tag);
				if (total.includes(searchTerm)) {
					return student;
				}
			}
		});

		if (result.length > 0) {
			setStudents(result);
		}

		if (searchTerm === "") {
			setStudents(list.students);
		}
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
			<input
				id="tag-input"
				onChange={(e) => {
					setTagSearchTerm(e.target.value);
				}}
				placeholder="Search by tags"
			/>
			{makeCards(students)}
		</div>
	);
};

export default StudentsList;
