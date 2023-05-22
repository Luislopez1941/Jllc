import React from 'react'
import main from './Main.css'
import programing from '../assets/main/images/programing.png'
import admi_1 from '../assets/main/images/admi_1.png'

const Main = () => {

    
    function handleFilterClick(event) {
        const filterValue = event.target.getAttribute('data-filter');
        const galleryItems = document.querySelectorAll(".project__card");
        const filterContainer = document.querySelector(".gallery__categories");
      
        filterContainer.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
        
        galleryItems.forEach(item => {
          if (item.classList.contains(filterValue) || filterValue === "all") {
            item.classList.remove("hide");
            item.classList.add("show");
          } else {
            item.classList.remove("show");
            item.classList.add("hide");
          }
        });}
     

  return (
    <main className='main'>
        <section className='about'>
            <div className='about__me'>
                <h2 className='title'>Sobre mí</h2>
                <p className='text'>Mi nombre es Jorge Luis actual mente tengo 21 años, soy Lic. en Contabilidad
                    y estoy cursando una Ing. en Sistemas computacionales. Mi experiencia incluye el desarrollo de
                    aplicaciones web y aplicaciones móvil tanto en el lado del cliente (frontend) como en el lado del
                    servidor (backend), he desarrollado diversos proyectos en mi carrera profesional.
                    Puede revisar mi perfil académico en mi blog y mis proyectos en mi portafolio
                    para obtener una mejor comprensión de mi experiencia y habilidades.
                </p>
                <div className='progress'>
                    <p>Fingma / Adobe XD 80%</p>
                    <div className='progress__bar progress__fa'>
                        <span></span>
                    </div>
                    <p>UX/UI 70%</p>
                    <div className='progress__bar progress__design'>
                        <span></span>
                    </div>
                    <p>HLTM / CSS nativo 90%</p>
                    <div className='progress__bar progress__html'>
                        <span></span>
                    </div>
                    <p>Sass 90%</p>
                    <div className='progress__bar progress__sass'>
                        <span></span>
                    </div>
                    <p>Material IU 90%</p>
                    <div className='progress__bar progress__material'>
                        <span></span>
                    </div>
                    <p>Tailwin / Bootstrap 80%</p>
                    <div className='progress__bar progress__tb'>
                        <span></span>
                    </div>
                    <p>JavaScript 85%</p>
                    <div className='progress__bar progress__javascript'>
                        <span></span>
                    </div>
                    <p>React 80%</p>
                    <div className='progress__bar progress__react'>
                        <span></span>
                    </div>
                    <p>Redux 80%</p>
                    <div className='progress__bar progress__redux'>
                        <span></span>
                    </div>
                    <p>Next.js 80%</p>
                    <div className='progress__bar progress__next'>
                        <span></span>
                    </div>
                    <p>Node.js 80%</p>
                    <div className='progress__bar progress__nodejs'>
                        <span></span>
                    </div>
                    <p>APIs (Rest JSON SOAP) 70%</p>
                    <div className='progress__bar progress__apis'>
                        <span></span>
                    </div>
                    <p>SQL 50%</p>
                    <div className='progress__bar progress__mysql'>
                        <span></span>
                    </div>
                    <p>Google Cloud 30%</p>
                    <div className='progress__bar progress__google'>
                        <span></span>
                    </div>
                    <p>GIT 70%</p>
                    <div className='progress__bar progress__git'>
                        <span></span>
                    </div>
                </div>
                    <div className='cta__progress'>
                        <a>Contactame</a>
                </div>
            </div>
            <div className='img__about'>
                <div className='img__container'>
                    <img src={programing} alt="Foto relacionado a acerca de mí" width="100" height="100"/>
                </div>
            </div>
            
        </section>
        <section className='learning'>
            <div className='learning__container'>
                <h2 className='title'>Aprendizaje</h2>
                <p className='text'>A lo largo de mi proceso de aprendizaje, he adquirido
                experiencia en diversas herramientas y tecnologías, lo que ha impulsado mi
                crecimiento y descubrimiento de nuevos campos, como la inteligencia artificial.
                Asimismo, he creado un canal en YouTube donde imparto cursos detallados sobre las
                tecnologías actuales. Además, he formado un grupo de WhatsApp con el propósito de
                ayudar a aquellos que tienen dudas y motivarlos a seguir adelante en esta profesión,
                la cual será una de las que revolucionará en las próximas décadas.</p>
                <div className='cta__learning'>
                    <a>Información</a>
                </div> 
   
            </div>
        </section>
        <section id='services' className='services'>
                <div className='services__title'>
                    <h2 className='title'>Mis servicios</h2>
                    <p className='text'>
                    Si necesitas algunos de los servicios mencionados, puedes contactarme. Además, estoy en proceso
                    de estudio en algunos campos y podría desarrollar proyectos simples.
                    </p>
                </div>
                <div className='services__card'>
                    <div className="card">
                        <div className="service__logo">
                        <i className='bx bx-laptop'></i>
                        </div>
                        <div className="service__name">
                            <p>Desarrollo web</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="service__logo">
                            <i className='bx bx-mobile'></i>
                        </div>
                        <div className="service__name">
                            <p>Desarollo híbrido y Movil (basicas)</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="service__logo ">
                        <i className='bx bxs-brain'></i>
                        </div>
                        <div className="service__name">
                            <p>Realidad Virtual (Aprendizaje)</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="service__logo">
                        <i className='bx bxs-data' ></i>
                        </div>
                        <div className="service__name">
                            <p>Machine Learning (Aprendizaje)</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="service__logo">
                        <i className='bx bxs-component'></i>
                        </div>
                        <div className="service__name">
                            <p>Blockchain</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="service__logo">
                        <i className='bx bxs-wink-smile'></i>
                        </div>
                        <div className="service__name">
                            <p>Proximamente</p>
                        </div>
                    </div>
                    
                </div>
        </section>
        <section id='portfolio' className='portfolio'>
            <div className='portfolio__title' >
                <h2 className='title'>Mis trabajo</h2>
                <p className='text'>
                En este apartado, podrás encontrar una recopilación de
                los trabajos y prácticas que he llevado a cabo durante
                mi proceso de aprendizaje.
                </p>
            </div>
            <div className="portfolio__gallery">
                <div className="gallery__categories">
                    <ul className='ul' onClick={handleFilterClick}>
                        <li className="filter-item active" data-filter="all">Todos</li>
                        <li className="filter-item " data-filter="gym">Desarrollo web</li>
                        <li className="filter-item " data-filter="tours__Web">Desarollo híbrido y Movil</li>
                        <li className="filter-item " data-filter="world__Tours">Realidad Virtual</li>
                        <li className="filter-item " data-filter="e__commerce">Machine Learning</li>
                    </ul>
                </div>
                <div className="proyect__gallery">
                    <div className="project__card tours__Web">
                        <img src={admi_1} alt="" />w
                        <div className="overlay">
                        </div>
                        <div className="project__info ">
                            <h2>Administrador de Veterinaria</h2>
                            <p><a href="https://administrador-de-clientes-eta.vercel.app">
                                Admistrador de Veterinaria donde puedes agregar, editar y eliminar a las mascotas
                                <br/>
                                <strong>Usuario:</strong> usuario
                                <br/>
                                <strong>Contraseña:</strong> contraseña
                                </a></p>
                            <span><i className="fa-solid fa-arrow-right-long"></i></span>
                        </div>
                    </div>
                    <div className="project__card e__commerce">
                        <img src={admi_1} alt="" />
                        <div className="overlay"></div>
                        <div className="project__info ">
                            <h2>Administrador de Veterinaria</h2>
                            <p>Admistrador de Veterinaria donde puedes agregar, editar y eliminar a las mascotas</p>
                            <span><i className="fa-solid fa-arrow-right-long"></i></span>
                        </div>
                    </div>
                    <div className="project__card tours__Web">
                        <img src={admi_1} alt="" />
                        <div className="overlay"></div>
                        <div className="project__info">
                            <h2>Administrador de Veterinaria</h2>
                            <p>Admistrador de Veterinaria donde puedes agregar, editar y eliminar a las mascotas</p>
                            <span><i className="fa-solid fa-arrow-right-long"></i></span>
                        </div>
                    </div>
                    <div className="project__card gym">
                        <img src={admi_1} alt="" />
                        <div className="overlay"></div>
                        <div className="project__info ">
                            <h2>Administrador de Veterinaria</h2>
                            <p>Admistrador de Veterinaria donde puedes agregar, editar y eliminar a las mascotas</p>
                            <span><i className="fa-solid fa-arrow-right-long"></i></span>
                        </div>
                    </div>
                    <div className="project__card world__Tours">
                        <img src={admi_1} alt="" />
                        <div className="overlay"></div>
                        <div className="project__info ">
                            <h2>Administrador de Veterinaria</h2>
                            <p>Admistrador de Veterinaria donde puedes agregar, editar y eliminar a las mascotas</p>
                            <span><i className="fa-solid fa-arrow-right-long"></i></span>
                        </div>
                    </div>
                    <div className="project__card tours__Web">
                        <img src={admi_1} alt="" />
                        <div className="overlay"></div>
                        <div className="project__info">
                        <h2>Administrador de Veterinaria</h2>
                        <p>Admistrador de Veterinaria donde puedes agregar, editar y eliminar a las mascotas</p>
                        <span><i className="fa-solid fa-arrow-right-long"></i></span>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
    </main>
    
  )
}

export default Main
