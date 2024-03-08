import './CSS/Body.css'
function Body() {
    return (
        <main className="Body">
            <section className='firstRow'>
                <section className='titleSection'>
                    <h2>WE'RE THE LAST OF A DYING BREED.</h2>
                    <p>No longer is the Barber shop a place for the elite, we welcome all of London's Gentry to experience Bear Barber.</p>
                    <p className='EST'><em>EST.</em>2008</p>
                </section>
                <section className='titleVideo'>
                    <video src='../../public/Video1.mp4' autoPlay muted />
                </section>
            </section>
            <section className='secondRow'>
                <div className='secLeft'>
                    <video src='../../public/Video2.mp4' autoPlay muted />
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
                <h2>OUR LOCATIONS</h2>

                <section className='locations'>
                    <section className='location1'>
                        <div className='elGrullo'>
                            El Grullo
                        </div>
                    </section>
                    <section className='location2'>

                    </section>
                </section>
            </section>
        </main>
    )
}

export default Body
