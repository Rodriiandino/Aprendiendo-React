import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ModalProvider } from './context/modal.jsx'
import { UsersProvider } from './context/users.jsx'
import { FilterProvider } from './context/filter.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ModalProvider>
    <UsersProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </UsersProvider>
  </ModalProvider>
)
