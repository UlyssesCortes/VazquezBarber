import './CSS/bodyStyle.css'
import locationImg from '../assets/ElGrullo.jpg'
import vazPort from '../assets/VazquezPortrait.jpeg'
import logo from '../assets/Pole.png'
import ReviewImg from '../assets/reviewImg.png'
import React from 'react';

function Home() {

    const openCalendly = () => {
        window.location.href = "https://calendly.com/ulyssescortesp";
    };

    return (
        <main className="Body">
            <section className='firstRow'>
                <section className='titleSection'>
                    <h2>EN CADA CORTE, EMERGE EL ARTE ÚNICO</h2>
                    <p>Ya no es la barbería un lugar exclusivo; damos la bienvenida a toda la distinguida clientela de México para experimentar VazquezBarber.</p>
                    <p className='EST'><em>EST.</em>2008</p>
                </section>
                <section className='titleVideo'>
                    <video src='Video1.mp4' autoPlay muted />
                </section>
            </section>
            <section className='secondRow'>
                <div className='secLeft'>
                    <video src='Video2.mp4' autoPlay muted />
                </div>
                <div className='secRight'>
                    <div className='secTop'>
                        <p className='secTopRev'>Experiencia excepcional, cortes de calidad y atención amigable. ¡Recomendado!</p>
                        <img className='revIcon' src={ReviewImg} alt="El Grullo Banner" />
                        <p>Carlos Rodríguez</p>
                    </div>
                    <div className='secDown'>
                        <div className='razorImg'></div>
                        <h2>RESERVA TU SERVICIO DE CORTE</h2>
                        <p>¡Agenda tu cita ahora y disfruta de un servicio de barbería excepcional en VazquezBarber!</p>
                        <button className='buttonHover' onClick={openCalendly}>RESERVA AQUÍ</button>
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
                    <img className='imageElGrullo' src={locationImg} alt="El Grullo Banner" />
                </section>
                <div className='ElGrullo'>
                    <h3>SERVICES</h3>
                    <ul className='serceList'>
                        <li><div className='scissors'></div>Corte de cabello</li>
                        <li><div className='beard'></div>Diseño de barba</li>
                        <li><div className='eyebrow'></div>Limpieza de ceja</li>
                        <li><div className='mask'></div>Aplicacion de mascarilla</li>
                    </ul>
                    <h3 className='contactTitle'>CONTACT</h3>
                    <ul className='contactList'>
                        <li><div className='phone'></div> 321 116 4092</li>
                        <li><div className='email'></div>gilb@vazquezBarber.com</li>
                        <li><div className='location'></div>20 de Noviembre #13 Col. El Cerrito</li>
                    </ul>
                    <button className='buttonHover'>SHOP DETAILS</button>
                </div>
            </section>
            <section className='fourthRow'>
                <section className='teamMembers'>
                    <h3 className='rowFourTitle'>OUR TEAM</h3>
                    <ul className='team'>
                        <li>
                            <div className='portraitContainer'>
                                <img className='portVaz' src={vazPort} alt="El Grullo Banner" />
                            </div>
                            <div className='portName'>
                                <h3>Gilberto Vazquez</h3>
                                <p>Senior Barber</p>
                            </div>
                            <div className='portCity'>
                                <h3>Vazquez<img className='logoImgCity' src={logo} alt="El Grullo Banner" />Barber</h3>
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
                            <h2>Navigate</h2>
                            <ul>
                                <li>Home</li>
                                <li>Locations</li>
                                <li>Services</li>
                                <li>Contact</li>
                            </ul>
                        </li>
                        <li>
                            <h2>El Grullo</h2>
                            <ul className='contactList'>
                                <li><div className='phone'></div> 321 116 4092</li>
                                <li><div className='email'></div>gilb@vazquezBarber.com</li>
                                <li><div className='location'></div>20 de Noviembre #13 Col. El Cerrito</li>
                            </ul>
                        </li>
                        <li>
                            <h2>Social</h2>
                            <ul>
                                <li>Instagram</li>
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
