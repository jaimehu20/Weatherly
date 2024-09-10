import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home} from './pages/HomePage'
import './index.css'
import { WeatherPredictions } from './pages/WeatherPredictions'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { WeatherPredictionDetails } from './pages/WeatherPredictionDetails'
import { News } from './pages/News'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/weather-predictions' element={<WeatherPredictions />} />
      <Route path='/weather-predictions-details/:city' element={<WeatherPredictionDetails />} />
      <Route path='/news-&-updates' element={<News />} />
    </Routes>
  </Router>
  </Provider>
)
