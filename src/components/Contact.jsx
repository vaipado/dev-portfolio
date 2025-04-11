
import { useState } from 'react'
import likendInLogo from '../assets/linkedIn.png';
import gitHubLogo from '../assets/gitHub.png';

function Contact() {
  return (
    <section id="contato" className="contact-section">
      <div className="contact-container">
        <p className="subtitle">-- Contato</p>
        <h1 className="subtitulo-maior">Como me encontrar?</h1>
        <p className="texto-contato">Você pode conferir meus projetos no GitHub, visitar meu perfil no LinkedIn ou, se preferir, entrar em contato por e-mail. Fica a seu critério!</p>
        <div className="social-links">
          <a href="https://github.com/vaipado" target="_blank" rel="noopener noreferrer">
            <img src={gitHubLogo} />
          </a>
          <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noopener noreferrer">
            <img src={likendInLogo} />
          </a>
          <a href="mailto:carnot.br@gmail.com" className='email-contact'>carnot.br@gmail.com</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
