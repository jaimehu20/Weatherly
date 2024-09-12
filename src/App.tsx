import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Home } from "./pages/HomePage";
import { WeatherPredictions } from "./pages/WeatherPredictions";
import { WeatherPredictionDetails } from "./pages/WeatherPredictionDetails";
import { News } from "./pages/News";
import { Guides } from "./pages/Guides";
import { ThemeProvider } from "./context/ThemeContext";

export function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/weather-predictions' element={<WeatherPredictions />} />
                    <Route path='/weather-predictions-details/:city' element={<WeatherPredictionDetails />} />
                    <Route path='/news-&-updates' element={<News />} />
                    <Route path='/guides-&-tips' element={<Guides />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}