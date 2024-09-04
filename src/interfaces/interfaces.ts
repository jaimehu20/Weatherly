interface Condition {
    icon: string,
    text: string
}

export interface CurrentWeather {
    condition : Condition,
    humidity: number,
    temp_c: number,
    uv: number,
    vis_km: number,
    wind_kph: number
}

interface City {
    name: string,
    current: CurrentWeather | null;
}

export interface CitiesState {
    [key: string] : City
}

interface LocationWeather {
    name: string
}

export interface WeatherResponse {
    location: LocationWeather,
    current: CurrentWeather
}