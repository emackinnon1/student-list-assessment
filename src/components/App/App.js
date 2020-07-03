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
			setStudentList(
				await getStudentData("https://www.hatchways.io/api/assessment/students")
			);
		};
		if (mounted) {
			getData();
		}
		return () => (mounted = false);
	}, []);

	return (
		<div className="App">
			{studentList.hasOwnProperty("students") ? (
				<StudentsList list={studentList} />
			) : (
				"Loading..."
			)}
		</div>
	);
};

export default App;
