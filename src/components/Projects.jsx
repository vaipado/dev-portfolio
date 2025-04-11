import htmlLogo from "../assets/html-5.png";
import cssLogo from "../assets/css-3.png";
import jsLogo from "../assets/js.png";
import digitalClock from "../assets/digitalClock.png"; 
import portifolio from "../assets/portifolio.png";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Relógio Digital",
      tecnologias: [htmlLogo, cssLogo, jsLogo],
      description: "Um projeto de relógio digital com opções de alternância entre formatos de 12h e 24h, além de suporte para modo claro e escuro.",
      image: digitalClock, // Corrigido
      link: "https://github.com/vaipado/digital-clock"
    },
    {
      id: 2,
      title: "Projeto 2",
      tecnologias: [htmlLogo, cssLogo, jsLogo],
      description: "Uma descrição curta do projeto 2 e as tecnologias utilizadas.",
      image: portifolio,
      link: "https://github.com/seuusuario/projeto2"
    },
    {
      id: 3,
      title: "Projeto 3",
      tecnologias: [htmlLogo, cssLogo, jsLogo],
      description: "Uma descrição curta do projeto 3 e as tecnologias utilizadas.",
      image: portifolio,
      link: "https://github.com/seuusuario/projeto3"
    }
  ];

  return (
    <section id="projetos" className="projects-section">
      <div className="projects-assets">
        <p className="subtitle">-- Projetos</p>
        <div className="projects-grid">
          {projects.map(project => (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card" key={project.id}>
              {/* Agora a imagem do projeto é exibida corretamente */}
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <h3>{project.title}</h3>
              <p>Principais tecnologias empregadas:</p>
              <div className="principaisTec">
                {project.tecnologias.map((tec, index) => (
                  <img key={index} src={tec} />
                ))}
              </div>
              <p>{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects