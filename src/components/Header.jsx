import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Header() {
  const [activeTab, setActiveTab] = useState("home");
  const [scrollClassUl, setScrollClassUl] = useState("");
  const pointRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY > 2.5 * windowHeight) {
        setActiveTab("contato");
        setScrollClassUl("scrolled-50px");
        return;
      }
      if (scrollY > 1.7 * windowHeight) {
        setActiveTab("projetos");
        setScrollClassUl("scrolled-50px");
        return;
      }
      if (scrollY > 0.5 * windowHeight) {
        setActiveTab("habilidades");
        setScrollClassUl("scrolled-50px");
        return;
      }
      if (scrollY > 50) {
        setActiveTab("home");
        setScrollClassUl("scrolled-50px");
      }
      if (scrollY <= 50) {
        setActiveTab("home");
        setScrollClassUl("");
        return;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const activeLi = document.querySelector(`li.aba-ativa`);
    const ul = document.querySelector("nav ul");

    if (activeLi && pointRef.current && ul) {
      const rect = activeLi.getBoundingClientRect();
      const ulRect = ul.getBoundingClientRect();

      const x = rect.left - ulRect.left + rect.width / 2;

      gsap.to(pointRef.current, {
        x,
        duration: 0.4,
        ease: "power3.out",
      });
    }
  }, [activeTab]);

  return (
    <header>
      <nav>
        <ul className={scrollClassUl}>
          <li className={activeTab === "home" ? "aba-ativa" : ""}>
            <a href="#sobre">HOME</a>
          </li>
          <li className={activeTab === "habilidades" ? "aba-ativa" : ""}>
            <a href="#habilidades">HABILIDADES</a>
          </li>
          <li className={activeTab === "projetos" ? "aba-ativa" : ""}>
            <a href="#projetos">PROJETOS</a>
          </li>
          <li className={activeTab === "contato" ? "aba-ativa" : ""}>
            <a href="#contato">CONTATO</a>
          </li>
          <span className="point-header" ref={pointRef}></span>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
