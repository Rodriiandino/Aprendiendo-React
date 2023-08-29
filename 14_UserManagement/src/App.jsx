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
            <table className='table'>
              <thead>
                <tr>
                  <th></th>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <ShowUsers />
              </tbody>
            </table>
          </article>
          <Footer />
        </section>

        <Modal />
      </main>
    </>
  )
}

export default App
