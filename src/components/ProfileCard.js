import './style.css';

function ProfileCard() {
    return (
        <div className="card">
            <img
                src="/assets/ProfilePic.jpg"
                alt="Profile"
                className="rounded-circle mb-3"
                style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "50%"
                }}
            />
            <h3>Roginne Geoffrey T. Ticao</h3>
            <p className="text-muted">BS in Computer Science</p>
            <p className="text-muted">Pamantasan ng Cabuyao</p>
            <p>💻 Interested in Game & Web Development</p>
            
        </div>
    );
}

export default ProfileCard;
