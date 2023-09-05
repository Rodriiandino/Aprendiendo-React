import './App.css'
import Header from './components/Header'
import ShowUsers from './components/ShowUsers'
import Modal from './components/Modal'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <main>
        <section>
          <Header />
          <article className='body'>
            <ShowUsers />
          </article>
          <Footer />
        </section>

        <Modal />
      </main>
    </>
  )
}

export default App
