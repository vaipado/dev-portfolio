import { useState, useEffect } from 'react';

function About() {
    const [scrollClass, setScrollClass] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolledY = window.scrollY;
            const windowHeight = window.innerHeight;
            
            if (scrolledY > 0.5 * windowHeight) {
                setScrollClass(true);
            } else {
                setScrollClass(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Para verificar a posição inicial

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="about-section">
            <div className="about-content">
                <div className={scrollClass ? "sobreFotoNome-fechado" : "sobreFotoNome"}>
                    <div className="profile-image">
                        <img src="/images/fotoPerfilPortifolio.png" alt="Foto de perfil" />
                    </div>
                    <div className="profile-nome">
                        <p>EU SOU</p>
                        <h1>CARLOS<br />GODINHO</h1>
                    </div>
                </div>

                <div className="bio">
                    <div className={scrollClass ? "textoGaveta-fechada" : "textoGaveta"}>
                        <p className="subtitulo-menor">-- Introdução</p>
                        <h1 className="subtitulo-maior">Desenvolvedor web Full-Stack</h1>
                        <h1 className="subtitulo-maior">Cursando Ciência da Computação</h1>
                        <p className="sobreTexto">
                            Sou viciado em programação, busco aprender coisas novas. Estou apto a dedicar horas de código para entregar soluções eficientes e de qualidade para você.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
