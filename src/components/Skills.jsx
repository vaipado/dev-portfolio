import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
import nodeLogo from "../assets/node-js.png";
import cLogo from "../assets/c-.png";

function Skills() {
    const skillsRef = useRef(null);
    const backendRef = useRef(null);
    const frontendRef = useRef(null);

    const skills = [
        { name: "HTML", image: htmlLogo },
        { name: "CSS", image: cssLogo },
        { name: "NodeJs", image: nodeLogo },
        { name: "C++", image: cLogo },
        { name: "JavaScript", image: jsLogo },
        { name: "jQuery", image: jQueryLogo },
        { name: "React", image: reactLogo },
        { name: "PHP", image: phpLogo },
        { name: "MySQL", image: mysqlLogo },
        { name: "Bootstrap", image: bootsLogo },
        { name: "Git", image: gitLogo }
    ];

    useEffect(() => {
        const container = skillsRef.current;
        const totalWidth = container.scrollWidth / 2;

        const tl = gsap.timeline({ repeat: -1, defaults: { ease: "linear" } });

        tl.to(container, {
            x: `-=${totalWidth}`,
            duration: 20,
            onRepeat: () => {
                gsap.set(container, { x: 0 });
            }
        });
        gsap.fromTo(frontendRef.current,
            {
              x: -200,
              opacity: 0,
            },
            {
              scrollTrigger: {
                trigger: frontendRef.current,
                start: "top 75%",
                end: "top 5%",
                toggleActions: "play reverse play reverse",
              },
              x: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
            }
          );
          
          gsap.fromTo(backendRef.current,
            {
              x: 200,
              opacity: 0,
            },
            {
              scrollTrigger: {
                trigger: backendRef.current,
                start: "top 75%",
                end: "top 5%",
                toggleActions: "play reverse play reverse",
              },
              x: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
              delay: 0.1,
            }
          );
          
        return () => tl.kill(); // limpa na desmontagem
    }, []);

    return (
        <section id="habilidades" className="skills-section">
            <div className="divHabilidades">
                <p className="subtitle">-- Habilidades</p>
                <h1 className="subtitulo-maior">Tecnologias de Desenvolvimento que domino</h1>
                <div className="skills-carousel-wrapper">
                    <div className="skills-container" ref={skillsRef}>
                        {[...skills, ...skills].map((skill, index) => (
                            <div className="skill" key={index}>
                                <div className="skill-name">{skill.name}</div>
                                <div className="skill-image">
                                    <img src={skill.image} alt={skill.name} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="divClasseHabilidades">
                <div className="fronted" ref={frontendRef} style={{ opacity: 0 }}>
                    <div className="classeHabilidadeImage">
                        <img className="frontedLogo" src={frontedLogo} />
                    </div>
                    <div>
                        <h4>Front End</h4>
                        <p>Transformo ideias em interfaces <br />bonitas, funcionais e responsivas.</p>
                    </div>
                </div>
                <div className="backend" ref={backendRef} style={{ opacity: 0 }}>
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
