import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/navbar.jsx"
import Hero from "./components/hero.jsx"
import Steps from "./components/steps.jsx"
import  Footer  from "./components/footer.jsx";
import About from "./pages/about.jsx"
import Moods from "./pages/moods.jsx"

import HappySongs from './components/happysongs.jsx'
import SadSongs from './components/sadsongs.jsx'
import ChillSongs from './components/chillsongs.jsx'
import AngrySongs from './components/angrysongs.jsx'

import Favorites from './pages/favorites.jsx'
import Join from './pages/join.jsx'



function App() {



return (
  
  <div className="radial-background">
    
    <Router>

    <Navbar/>

    <hr className="section-divider1" />

    <Routes>
        <Route 
            path="/" 
            element={
              <>
                <Hero/>
                <div style={{ height: '180px' }} />
                <Steps/>
              </>
            }

            />

        <Route path="/about" element={<About/>}/>
        <Route path="/moods" element={<Moods/>}/>
              <Route path="/moods/happy" element={<HappySongs/>}/>
              <Route path="/moods/sad" element={<SadSongs/>}/>
              <Route path="/moods/chill" element={<ChillSongs/>}/>
              <Route path="/moods/angry" element={<AngrySongs/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/join" element={<Join/>}/>



    </Routes>

    <Footer/>


    </Router>

  </div>
  )
}


export default App
