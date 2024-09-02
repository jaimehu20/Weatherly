import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home} from './pages/HomePage'
import './index.css'
import { WeatherPredictions } from './pages/WeatherPredictions'
import { Provider } from 'react-redux'
import { store } from './app/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/weather-predictions' element={<WeatherPredictions />} />
    </Routes>
  </Router>
  </Provider>
)
