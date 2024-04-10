import './CSS/bodyStyle.css'
import locationImg from '../assets/ElGrullo.jpg'
import vazPort from '../assets/Vazquez.jpg'
import ReviewImg from '../assets/reviewImg.png'
import Razor from '../assets/Razor.svg'
import Email from '../assets/Email.svg'
import Phone from '../assets/Phone.svg'
import Location from '../assets/Location.svg'
import Scissors from '../assets/scissors.png'
import Beard from '../assets/beard.png'
import Eyebrow from '../assets/eyebrow.png'
import Mask from '../assets/facial-mask.png'
import React, { useState } from 'react';
import Lottie from "lottie-react"

import logoAnimation from '../assets/BarberLines.json';

function Home() {
    const openCalendly = () => {
        window.location.href = "https://calendly.com/gilberto_vazquez/agendar-cita";
    };

    const Popup = ({ isOpen }) => {
        return (
            isOpen && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>¡Próximamente!</h2>
                    </div>
                </div>
            )
        );
    };

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const openPopup = () => {
        setIsPopupOpen(true);
        setTimeout(() => {
            setIsPopupOpen(false);
        }, 2500);
    };

    return (
        <main className="Body">
            <section className='firstRow'>
                <section className='titleSection'>
                    <h2>EN CADA CORTE, EMERGE EL ARTE UNICO</h2>
                    <p>Ya no es la barbería un lugar exclusivo; damos la bienvenida a toda la distinguida clientela de México para experimentar VazquezBarber.</p>
                    <p className='EST'><em>EST.</em>2017</p>
                </section>
                <section className='titleVideo'>
                    <video src='Video1.mp4' autoPlay loop muted />
                </section>
            </section>
            <section className='secondRow'>
                <div className='secLeft'>
                    <video src='Video2.mp4' autoPlay loop muted />
                </div>
                <div className='secRight'>
                    <div className='secTop'>
                        <p className='secTopRev'>"Experiencia excepcional, cortes de calidad y atención amigable. ¡Recomendado!"</p>
                        <img className='revIcon' src={ReviewImg} alt="El Grullo Banner" loading="lazy" />
                        <p>Carlos Rodríguez</p>
                    </div>
                    <div className='secDown'>
                        <img className='razorImg' src={Razor} alt="Razor" loading="lazy" />
                        <h2>RESERVA TU SERVICIO DE CORTE</h2>
                        <p>¡Agenda tu cita ahora y disfruta de un servicio de barbería excepcional en VazquezBarber!</p>
                        <button className='reservaCita' onClick={openCalendly}>RESERVA AQUÍ</button>
                    </div>
                </div>
            </section>
            <section className='thirdRow' id='locationID'>
                <h2 className='thridTitle'>
                    NUESTRAS UBICACIONES</h2>
                <section className='topLocation'>
                    <section>
                        <h2 className='busName'>Vazquez Barber</h2>
                        <h2 className='cityName'>El Grullo</h2>
                    </section>
                    <img className='imageElGrullo' src={locationImg} alt="El Grullo Banner" loading="lazy" />
                </section>
                <div className='ElGrullo'>
                    <h3>SERVICIOS</h3>
                    <ul className='serceList'>
                        <li><img className='scissors' src={Scissors} alt="scissors" loading="lazy" />Corte de cabello</li>
                        <li><img className='beard' src={Beard} alt="Beard" loading="lazy" />Diseño de barba</li>
                        <li><img className='eyebrow' src={Eyebrow} alt="eyebrow" loading="lazy" />Limpieza de ceja</li>
                        <li><img className='mask' src={Mask} alt="mask" loading="lazy" />Aplicacion de mascarilla</li>
                    </ul>
                    <h3 className='contactTitle'>CONTACTO</h3>
                    <ul className='contactList'>
                        <li>
                            <img className='phone' src={Phone} alt="Phone" loading="lazy" />
                            <a href="tel:+3211164092">321 116 4092</a>
                        </li>
                        <li>
                            <img className='email' src={Email} alt="Email" loading="lazy" />
                            <a href="mailto:gilberto@vazquezbarber.com">gilb@vazquezBarber.com</a>
                        </li>
                        <li>
                            <img className='location' src={Location} alt="Location" loading="lazy" />
                            <a href='#'>20 de Noviembre #13 Col. El Cerrito</a>
                        </li>
                    </ul>
                    <button className='buttonHover' onClick={openPopup}>PRODUCTOS</button>
                    <Popup isOpen={isPopupOpen} />
                </div>
            </section>
            <section className='fourthRow'>
                <section className='teamMembers'>
                    <h3 className='rowFourTitle'>NUESTRO EQUIPO</h3>
                    <ul className='team'>
                        <li>
                            <div className='portraitContainer'>
                                <img className='portVaz' src={vazPort} alt="El Grullo Banner" loading="lazy" />
                            </div>
                            <div className='portName'>
                                <h3>Gilberto Vazquez</h3>
                                <p>Senior Barber</p>
                            </div>
                            <div className='portCity'>
                                <h3>Vazquez
                                    <Lottie className="logoImg" animationData={logoAnimation} loop={true} />
                                    Barber</h3>
                                <p>El Grullo</p>
                            </div>
                        </li>
                    </ul>
                </section>
            </section>
            <section className='footer'>
                <section className='footerLinks'>
                    <ul className='foterColumns'>
                        <li>
                            <h2>Explorar</h2>
                            <ul>
                                <li>
                                    <a href='#'>Inicio</a>
                                </li>
                                <li>
                                    <a href='#'>Productos</a>
                                </li>
                                <li>
                                    <a href="#locationID">Sucursales</a>
                                </li>
                                <li>
                                    <a href='#' onClick={openCalendly}>Agendar Cita</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h2>El Grullo</h2>
                            <ul className='contactList'>
                                <li><img className='phone' src={Phone} alt="Phone" loading="lazy" />
                                    <a href="tel:+3211164092">321 116 4092</a>
                                </li>
                                <li><img className='email' src={Email} alt="Location" loading="lazy" />
                                    <a href="mailto:gilberto@vazquezbarber.com">gilb@vazquezBarber.com</a>
                                </li>
                                <li><img className='location' src={Location} alt="Location" loading="lazy" /><a href='#'>20 de Noviembre #13 Col. El Cerrito</a></li>
                            </ul>
                        </li>
                        <li className='social'>
                            <h2>Redes Sociales</h2>
                            <ul>
                                <li><a href='https://www.instagram.com/vazquezbarber3/?utm_source=qr&igsh=NHMxbjdzdGxwMGxx'>Instagram</a></li>
                                <li>Facebook</li>
                                <li>Tweitter</li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </section>
        </main>
    )
}

export default Home
