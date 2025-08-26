import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header'
import AppRoutes from './Routes/AppRoutes'
import LoginModal from "./Components/LoginModal";
import './App.css'


function App() {

  return (
    <div className='app-wrapper'>
    <Router>
      <Header />
      <AppRoutes />
      <LoginModal/>
    </Router>
    <ToastContainer 
      toastClassName="custom-toast"
      position='top-center'
      icon={false}
      hideProgressBar
      closeButton={false}
      closeOnClick
      draggable={false}
      pauseOnHover={false}
      autoClose={1000}
    />
    </div>
  )
}

export default App
