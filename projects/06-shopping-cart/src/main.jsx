import './index.css'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { FiltersProvider } from './context/filters'

createRoot(document.getElementById('root')).render(

  <FiltersProvider>
    <App />
  </FiltersProvider>

)
