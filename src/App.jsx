import './App.css'
import {useState, useEffect} from 'react'
import { Route, Routes } from 'react-router-dom'

// Pages
import Home from './pages/Home/Home'
import AboutPage from './pages/About/AboutPage'
import ServicesPage from './pages/Service/ServicesPage'

//Scroll
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const timeoutId = setTimeout(() => {
          setLoading(false)
      }, 1600)

      return () => clearTimeout(timeoutId)
  }, [])
  return (
      <>

        <ScrollToTop/>

          {
              loading ?

                  <div className='loading-pag'>
                      <div className="loader">
                          <span>&lt;FIGUEDEV/&gt;</span>
                          <span>&lt;FIGUEDEV/&gt;</span>
                      </div>
                  </div>

                  :

                  <Routes>
                      <Route exact path="/" element={<Home />}></Route>
                      <Route exact path="/about" element={<AboutPage />}></Route>
                      <Route exact path="/services" element={<ServicesPage />}></Route>
                  </Routes>
          }

      </>
)}

export default App
