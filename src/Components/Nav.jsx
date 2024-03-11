import './CSS/navStyle.css'
import logo from '../assets/Pole.png'

function Nav() {
    return (
        <nav className='NavBar'>
            <section className='NavContent'>
                <section>
                    <h3>Vazquez<img className='logoImg' src={logo} alt="El Grullo Banner" />Barber</h3>
                </section>
                <ul className='NavTabs'>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </section>
        </nav>
    )
}

export default Nav
