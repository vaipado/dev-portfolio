import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
    const wrapperRef = useRef();
    const textRef = useRef();

    useEffect(() => {
        ScrollTrigger.create({
            trigger: wrapperRef.current,
            start: "top -39%",
            onEnter: () => {
                gsap.to(wrapperRef.current, {
                    x: "-150%",
                    y: "-40%",
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.out",
                });
            },
            onLeaveBack: () => {
                gsap.to(wrapperRef.current, {
                    x: "0%",
                    y: "0%",
                    opacity: 1,
                    duration: 0.8,
                    ease: "elastic.out(1, 0.3)",
                });
            },
        });
    }, []);

    return (
        <section className="about-section">
            <div className="about-content" ref={wrapperRef}>
                <div className="sobreFotoNome">
                    <div className="profile-image">
                        <img src="/images/fotoPerfilPortifolio.png" alt="Foto de perfil" />
                    </div>
                    <div className="profile-nome">
                        <p>EU SOU</p>
                        <h1>CARLOS<br />GODINHO</h1>
                    </div>
                </div>

                <div className="bio">
                    <div className="textoGaveta" ref={textRef}>
                        <p className="subtitle">-- Introdução</p>
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
