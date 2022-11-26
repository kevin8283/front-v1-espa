import { Home, Login, Orientation, Deliberation, Dashboard } from './views'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import './App.css'

function App() {
  return (
    <Router>
      <Routes> 
          <Route path="/" element={<Home/>}>
              <Route path="dashboard" element={<Dashboard/>}/>
              <Route path="deliberation" element={<Deliberation/>}/>
          </Route>
          <Route path="/orientation" element={<Orientation/>}/>
          <Route path="/login" element={<Login/>}/>  
      </Routes>
    </Router>
  )
}

export default App;
