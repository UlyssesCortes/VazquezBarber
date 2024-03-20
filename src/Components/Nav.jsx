import './CSS/navStyle.css'
import logo from '../assets/Pole.png'
import Hover1 from '../assets/linkHover1.png'
import Hover2 from '../assets/linkHover2.png'
import Hover3 from '../assets/linkHover3.png'

window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.NavBar');
    if (window.scrollY > 50) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});

function Nav() {
    const openCalendly = () => {
        window.location.href = "https://calendly.com/gilberto_vazquez";
    };
    return (
        <nav className='NavBar'>
            <section className='NavContent'>
                <section>
                    <h3>Vazquez<img className='logoImg' src={logo} alt="El Grullo Banner" />Barber</h3>
                </section>
                <ul className='NavTabs'>
                    <li className='inicio'>
                        <a href='#'>Inicio
                            <div class="image-container">
                                <img class='hover-image' src={Hover2} alt="El Grullo Banner" />
                            </div>
                        </a>
                    </li>
                    <li className='productos'>
                        <a href='#'>Productos
                            <div class="image-container">
                                <img class='hover-image' src={Hover1} alt="El Grullo Banner" />
                            </div>
                        </a>
                    </li>
                    <li className='locations'>
                        <a href="#locationID">Sucursales
                            <div class="image-container">
                                <img class='hover-image' src={Hover3} alt="El Grullo Banner" />
                            </div>
                        </a>
                    </li>
                    <li className='reservarBtn'>
                        <button onClick={openCalendly}>AGENDAR CITA</button>
                    </li>
                </ul>
            </section>
        </nav >
    )
}

export default Nav
