import './CSS/bodyStyle.css'
import locationImg from '../assets/ElGrullo.jpg'
function Home() {
    return (
        <main className="Body">
            <section className='firstRow'>
                <section className='titleSection'>
                    <h2>WE'RE THE LAST OF A DYING BREED.</h2>
                    <p>No longer is the Barber shop a place for the elite, we welcome all of London's Gentry to experience Bear Barber.</p>
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
                        <p className='secTopRev'>The best Barber in London for my money! Professional and high quality.</p>
                        <div className='revIcon'></div>
                        <p>John Roberts</p>
                    </div>
                    <div className='secDown'>
                        <div className='razorImg'></div>
                        <h2> BOOK YOUR BEARD SERVICE</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button>CONTACT US TO BOOK</button>
                    </div>
                </div>
            </section>
            <section className='thirdRow'>
                <h2 className='thridTitle'>OUR LOCATIONS</h2>
                <section className='topLocation'>
                    <section>
                        <h2 className='busName'>VazquezBarber</h2>
                        <h2 className='cityName'>El Grullo</h2>
                    </section>
                    <img className='imageElGrullo' src={locationImg} alt="El Grullo Banner" />
                </section>
                <div className='ElGrullo'>
                    <h3>SERVICES</h3>
                    <ul className='serceList'>
                        <li>Beard Styling</li>
                        <li>Haircut</li>
                        <li>Skin Fade</li>
                        <li>Restyle</li>
                        <li>Buzz Cut</li>
                    </ul>
                    <h3 className='contactTitle'>CONTACT</h3>
                    <ul className='contactList'>
                        <li>020 7946 0827</li>
                        <li>hey@bearbarberpallmall.com</li>
                        <li>57 Alexander Road, London N30 8FV</li>
                    </ul>
                    <button>SHOP DETAILS</button>
                </div>
            </section>
            <section className='fourthRow'>
                <section className='teamMembers'>
                    <h3 className='rowFourTitle'>OUR TEAM</h3>
                </section>
            </section>
        </main>
    )
}

export default Home
