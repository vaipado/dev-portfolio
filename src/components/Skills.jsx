import reactLogo from "../assets/react.svg";
import htmlLogo from "../assets/html-5.png";
import cssLogo from "../assets/css-3.png";
import jsLogo from "../assets/js.png";
import jQueryLogo from "../assets/social.png";
import phpLogo from "../assets/php.png";
import mysqlLogo from "../assets/mysql.png";
import bootsLogo from "../assets/bootstrap.png";
import gitLogo from "../assets/git.png";
import frontedLogo from "../assets/fronted.png";
import bancoDadosLogo from "../assets/big-database.png";

function Skills() {
    const skills = [
        { name: "HTML", image: htmlLogo },
        { name: "CSS", image: cssLogo },
        { name: "JavaScript", image: jsLogo },
        { name: "jQuery", image: jQueryLogo },
        { name: "React", image: reactLogo },
        { name: "PHP", image: phpLogo },
        { name: "MySQL", image: mysqlLogo },
        { name: "Bootstrap", image: bootsLogo },
        { name: "Git", image: gitLogo }
    ];

    return (
        <section id="habilidades" className="skills-section">
            <div className="divHabilidades">
                <p className="subtitulo-menor">-- Habilidades</p>
                <h1 className="subtitulo-maior">Tecnologias de Desenvolvimento Web</h1>
                <div className="skills-container">
                    {skills.map((skill, index) => (
                        <div className="skill" key={index}>
                            <div className="skill-name">{skill.name}</div>
                            <div className="skill-image">
                                <img src={skill.image} alt={skill.name} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="divClasseHabilidades">
                <div className="fronted">
                    <div className="classeHabilidadeImage">
                        <img className="frontedLogo" src={frontedLogo} />
                    </div>
                    <div>
                        <h4>Front End</h4>
                        <p>Transformo ideias em interfaces <br />bonitas, funcionais e responsivas.</p>
                    </div>
                </div>
                <div className="backend">
                    <div className="classeHabilidadeImage">
                        <img src={bancoDadosLogo} />
                    </div>
                    <div>
                        <h4>Back End</h4>
                        <p>Construo sistemas robustos, <br />eficientes e seguros.</p>
                    </div>
                </div>

            </div>
            <div className="divFundoSkills"></div>
        </section>
    );
}

export default Skills;
