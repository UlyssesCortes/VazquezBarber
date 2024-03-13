import './CSS/navStyle.css'
import logo from '../assets/Pole.png'

window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.NavBar');
    if (window.scrollY > 50) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});

function Nav() {
    return (
        <nav className='NavBar'>
            <section className='NavContent'>
                <section>
                    <h3>Vazquez<img className='logoImg' src={logo} alt="El Grullo Banner" />Barber</h3>
                </section>
                <ul className='NavTabs'>
                    <li><a href='#'>INICIO</a></li>
                    <li>PRODUCTOS</li>
                    <li><a href="#locationID">SUCURSALES</a></li>
                    <li className='reservarBtn'>AGENDAR CITA</li>
                </ul>
            </section>
        </nav>
    )
}

export default Nav
