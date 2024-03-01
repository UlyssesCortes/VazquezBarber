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

                    </div>
                    <div className='secDown'>

                    </div>
                </div>
            </section>
        </main>
    )
}

export default Body
