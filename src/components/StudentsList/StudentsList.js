import React from "react";
import StudentCard from "../StudentCard/StudentCard";

const StudentsList = ({ list }) => {
	console.log(list);
	list.students.map((student) => console.log(student));
	const cards = list.students.map((student, i) => (
		<StudentCard key={i} {...student} />
	));
	return <div className="student-list">{cards}</div>;
};

export default StudentsList;
