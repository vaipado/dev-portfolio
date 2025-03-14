import { useState, useEffect } from 'react'

function Header() {
  const [activeTab, setActiveTab] = useState("home");
  const [scrollClassUl, setScrollClassUl] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
  
      // Quando rolar mais de 2.5 vezes a altura da janela
      if (scrollY > 2.5 * windowHeight) {
        setActiveTab("contato");
        setScrollClassUl("scrolled-50px");
        return;
      }
      // Quando rolar mais de 1.7 vezes a altura da janela
      if (scrollY > 1.7 * windowHeight) {
        setActiveTab("projetos");
        setScrollClassUl("scrolled-50px");
        return;
      }
      // Quando rolar mais de 0.5 vezes a altura da janela
      if (scrollY > 0.5 * windowHeight) {
        setActiveTab("habilidades");
        setScrollClassUl("scrolled-50px");
        return;
      }
      if(scrollY > 50){
        setActiveTab("home");
        setScrollClassUl("scrolled-50px");
      }
      // Quando estiver bem perto do topo
      if (scrollY <= 50) {
        setActiveTab("home");
        setScrollClassUl("");  // Remova a classe quando o topo for atingido
        return;
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav>
        <ul className={scrollClassUl}>
          <li className={activeTab === "home" ? "aba-ativa" : ""}>
            <a href="#sobre">HOME</a>
            <div className='point-header'></div>
          </li>
          <li className={activeTab === "habilidades" ? "aba-ativa" : ""}>
            <a href="#habilidades">HABILIDADES</a>
            <div className='point-header'></div>
          </li>
          <li className={activeTab === "projetos" ? "aba-ativa" : ""}>
            <a href="#projetos">PROJETOS</a>
            <div className='point-header'></div>
          </li>
          <li className={activeTab === "contato" ? "aba-ativa" : ""}>
            <a href="#contato">CONTATO</a>
            <div className='point-header'></div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
