import "./StudentCard.css";

function StudentCard({ student }) {
    return (
        <article className="student-card">
            <div className="emoji">
                
                {student.emoji && (
                        <img className="student-emoji" src={student.emoji} alt={student.funFact} />
                    )
                }

            </div>
            <h2>{student.name}</h2>
            <p>{student.city}</p>

            <div className="student-skill">
                {student.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                ))}
            </div>
        </article>
    );
}

export default StudentCard;