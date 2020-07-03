import React, { useState, useEffect } from "react";
import "./App.css";
import { getStudentData } from "../../apiCalls";

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

	console.log(studentList.students);

	return (
		<div className="App">
			{studentList.hasOwnProperty("students")
				? studentList.students.toString()
				: "Loading..."}
		</div>
	);
};

export default App;
