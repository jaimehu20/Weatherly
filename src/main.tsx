import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home} from './pages/HomePage'
import './index.css'
import { WeatherPredictions } from './pages/WeatherPredictions'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/weather-predictions' element={<WeatherPredictions />} />
    </Routes>
  </Router>
)
