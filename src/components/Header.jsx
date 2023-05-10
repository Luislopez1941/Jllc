import React from 'react'
import header from './Header.css'
import logo from '../assets/header/imagenes/logo.png'
import  luis from '../assets/header/imagenes/luis.jpg'
import cv from '../assets/header/pdf/cv.pdf'

const Header = () => {
  return (
    <header className='hero'>
        <div className='hero__navigation'>       
                <figure className='logo__container'>
                    <img className='jllc' src={logo} alt='Logo de pagina'/>
                    <h2>JLLC</h2>
                </figure>
            <nav className='hero__nav'> 
                <ul className='nav__items'>
                    <li className='nav__link'>Sobre mí</li>
                    <li className='nav__link'>Servicios</li>
                    <li className='nav__link'>Portafolio</li>
                    <li className='nav__link'>Contacto</li>
                </ul>
            </nav>
        </div>
        <div className='hero__presentation'>
            <section className='presentation'>
                <div className='left__presentation'>
                    <div className='content'>
                        <div className="message__bubble">
                            <div className="message__text">
                                <p>Hola, Yo soy</p>
                            </div>
                        </div>
                        <div className='triangle'></div>
                        <h2>J. Jorge Luis</h2> 
                        <p className='p'>Profesional en desarrollo web y Móvil</p>
                        <div className='buttons'>
                        <div className='cta__uno'>
                            <a href={cv} download="Jorge Luis Lopez Correa CV.pdf">Desc. CV</a>
                        </div>
                        <div className='cta__dos'>
                            <a>Portafolio</a>
                        </div>
                        </div>
                        
                    </div>

                </div>
                <div className='rigth__content'>
                    <div className='content'>
                        <img className='luis' src={luis} alt=''></img>
                    </div>
                </div>
            </section>
        </div>
    </header>
  )
}

export default Header
