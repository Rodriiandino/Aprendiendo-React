import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FilterProvider } from './context/filter.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FilterProvider>
    <App />
  </FilterProvider>
)
