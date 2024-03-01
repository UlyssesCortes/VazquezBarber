import Nav from './Components/Nav'
import Body from './Components/Body'
function App() {

  return (
    <main className='mainSection'>
      <Nav />
      <section className='blackBorder'>
        <Body />
        <video src='./assets/Video1.mp4' />
      </section>

    </main>
  )
}

export default App
