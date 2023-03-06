import { Home, Login, Orientation, OrientatioResults,
        Deliberation, Dashboard, 
        DeliberationAnalytics, DeliberationPredict, Landing, Thesis, 
        ThesisAnalytics, ThesisRecommendation, Settings } from './views'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import './App.css'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="login" element={<Login/>}/>  
        <Route path="home" element={<Home/>}>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="deliberation" element={<Deliberation/>}>
              <Route path="analytics" element={<DeliberationAnalytics/>}/>
              <Route path="predict" exact element={<DeliberationPredict/>}/>
          </Route>
          <Route path="thesis" element={<Thesis/>}>
              <Route path="analytics" element={<ThesisAnalytics/>}/>
              <Route path="recommend" element={<ThesisRecommendation/>}/>
          </Route>
          <Route path="settings" element={<Settings/>}/>
        </Route>
        <Route path="orientation" element={<Orientation/>}/>
        <Route path="orientation/results" element={<OrientatioResults/>}/>
      </Routes>
    </Router>
  )
}

export default App;
