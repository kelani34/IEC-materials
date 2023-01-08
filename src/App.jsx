import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Communication from './pages/Communication'
import Constructions from './pages/Constructions'
import DigitalLiteracy from './pages/DigitalLiteracy'
import GirlsScholarship from './pages/GirlsScholarship'
import LifeSkill from './pages/LifeSkill'
import Renovations from './pages/Renovations'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import SystemsStrenghtening from './pages/SystemsStrenghtening'
import Header from './components/header/Header'

function App() {
  return (
    <>
      
      <Router>
      <Sidebar>
        <Header>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/communication' element={<Communication />}/>
          <Route path='/constructions' element={<Constructions />}/>
          <Route path='/digital-literacy' element={<DigitalLiteracy />}/>
          <Route path='/girls-scholarship' element={<GirlsScholarship />}/>
          <Route path='/life-skill' element={<LifeSkill />}/>
          <Route path='/renovations' element={<Renovations />}/>
          <Route path='/reports' element={<Reports />}/>
          <Route path='/settings' element={<Settings />}/>
          <Route path='/systems-strengthnening' element={<SystemsStrenghtening />}/>
        </Routes>
        </Header>
        </Sidebar>
      </Router>
    </>
  )
}

export default App
