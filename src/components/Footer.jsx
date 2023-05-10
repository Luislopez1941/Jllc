import React from 'react'
import footer from './Footer.css'

const Footer = () => {
  return (
    <footer id="contact">
        <div className="social__media">
            <h3>Redes sociales</h3>
            <p>Auténtico e innovador</p>
            <p>Desarrollo lo que necesitas, con un enfoque en usabilidad y rendimiento</p>
            <div className="social__mediaIcons">
                <a href="https://www.facebook.com" target="_blank" aria-label="Ir a facebook">
                    <i className='bx bxl-facebook-square'></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" aria-label="Ir a instagram">
                    <i className='bx bxl-instagram'></i>
                </a>
                <a href="https://www.linkedin.com" target="_blank" aria-label="Ir a linkedin">
                    <i className='bx bxl-linkedin' ></i>
                </a>
            </div>
        </div>
        <div className="contact">
            <h3>Contacto</h3>
            <div className="phone__number">
                <p>+52 998 355 2309</p>
            </div>
            <div className="email">
                <p>jorg3luislopezc1941@hotmail.com</p>
            </div>
            <a href="mailto:john@email.com" className="cursor-pointer">Escríbeme</a>
        </div>
        <div className="my__services">
            <h3>Mis Servicios</h3>
            <p>Desarrollo web</p>
            <p>Desarrollo móvil</p>
            <p>Machine Learning</p>
            <p>Blockchain</p>
        </div>
    </footer>
  )
}


export default Footer
