import { Home, Login, Orientation, 
        Deliberation, Dashboard, 
        DeliberationAnalytics, DeliberationPredict } from './views'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/login" element={<Login/>}/>  
          <Route path="/" element={<Home/>}>
              <Route path="dashboard" element={<Dashboard/>}/>
              <Route path="deliberation" element={<Deliberation/>}>
                  <Route path="analytics" element={<DeliberationAnalytics/>}/>
                  <Route path="predict" exact element={<DeliberationPredict/>}/>
              </Route>
          </Route>
          <Route path="/orientation" element={<Orientation/>}/> 
      </Routes>
    </Router>
  )
}

export default App;
