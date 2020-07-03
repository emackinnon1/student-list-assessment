import React, { useState, useEffect } from "react";
import "./App.css";
import { getStudentData } from "../../apiCalls";
import StudentsList from "../StudentsList/StudentsList";

const App = () => {
	const [studentList, setStudentList] = useState({});

	fetch(" https://www.hatchways.io/api/assessment/students");

	useEffect(() => {
		let mounted = true;
		const getData = async () => {
			const initialList = await getStudentData(
				"https://www.hatchways.io/api/assessment/students"
			);
			const updatedList = initialList.students.map((student) => {
				return { ...student, tags: [] };
			});
			setStudentList({ students: updatedList });
		};
		if (mounted) {
			getData();
		}
		return () => (mounted = false);
	}, []);

	const addTag = (tag, id) => {
		const updatedList = studentList.students.map((student) => {
			if (id === student.id) {
				return {
					...student,
					tags: [...student.tags, tag],
				};
			} else {
				return student;
			}
		});
		setStudentList({ students: updatedList });
	};

	return (
		<div className="App">
			{studentList.hasOwnProperty("students") ? (
				<StudentsList list={studentList} addTag={addTag} />
			) : (
				"Loading..."
			)}
		</div>
	);
};

export default App;
