import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import AppRoutes from './Routes/AppRoutes'

function App() {

  return (
    <div className='app-wrapper'>
    <Router>
      <Header />
      <AppRoutes />
    </Router>
    </div>
  )
}

export default App
