import './App.css'
import Header from './components/Header/Header'
import Router from './components/Router/Router'
import MobileMenu from './components/MobileMenu/MobileMenu'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <Header/>
      <Router/>
      <MobileMenu/>
      <Footer/>
    </div>
  )
}

export default App
