import './CSS/Nav.css'
function Nav() {
    return (
        <nav className='NavBar'>
            <section className='NavContent'>
                <section>
                    <h3>Vazquez Barber</h3>
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
