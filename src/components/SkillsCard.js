import './style.css';

function SkillsCard() {
    return (
        <div className="card">
            <h4>Skills</h4>
            <ul className="skills-list">
                <li className="skill-item">
                    <img src="/assets/HTML.png" alt="HTML" className="skill-icon" />
                    <span className="tooltip">HTML</span>
                </li >
                <li className="skill-item">
                    <img src="/assets/CSS.png" alt="CSS" className="skill-icon" />
                    <span className="tooltip">CSS</span>
                </li>
                <li className="skill-item">
                    <img src="/assets/Php.png" alt="PHP" className="skill-icon" />
                    <span className="tooltip">PHP</span>
                </li>
                <li className="skill-item">
                    <img src="/assets/MySql.png" alt="MySQL" className="skill-icon" />
                    <span className="tooltip">MySQL</span>
                </li>
                <li className="skill-item">
                    <img src="/assets/Java.png" alt="Java" className="skill-icon" />
                    <span className="tooltip">Java</span>
                </li>
                <li className="skill-item">
                    <img src="/assets/Git.png" alt="Git" className="skill-icon" />
                    <span className="tooltip">Git</span>
                </li>
                <li className="skill-item">
                    <img src="/assets/Github.png" alt="GitHub" className="skill-icon" />
                    <span className="tooltip">GitHub</span>
                </li>
                <li className="skill-item">
                    <img src="/assets/Gamemaker.png" alt="Gamemaker" className="skill-icon" />
                    <span className="tooltip">Gamemaker</span>
                </li>
                <li className="skill-item">
                    <img src="/assets/Pico8.png" alt="Pico8" className="skill-icon" />
                    <span className="tooltip">Pico-8</span>
                </li>
                <li className="skill-item">
                    <img src="/assets/Aseprite.png" alt="Aseprite" className="skill-icon" />
                    <span className="tooltip">Aseprite</span>
                </li>
            </ul>
        </div>
    );
}

export default SkillsCard;
