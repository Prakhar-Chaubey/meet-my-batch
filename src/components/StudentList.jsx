import StudentCard from "./StudentCard";
import "./StudentList.css";

function StudentList({ students }) {
    return (
        <section className="section projects" id="projects">
            <div className="container">
                <div className="student-skill">
                    {students.map((student) => (
                        <StudentCard key={student.id} student={student} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default StudentList;