export interface LocationWeather {
    name: string,
    localtime: string
}

export interface CurrentWeather {
    condition : Condition,
    humidity: number,
    temp_c: number,
    uv: number,
    vis_km: number,
    wind_kph: number,
    last_updated: string,
    feelslike_c: number,
    pressure_mb: number,
    dewpoint_c: number
}

export interface SingularDay {
    mintemp_c: number,
    maxtemp_c: number,
    daily_chance_of_rain: number,
    condition: Condition,
    avghumidity: number,
    maxwind_kph: number,
    avgvis_km: number
}

export interface SingularHour {
    condition: Condition,
    time: string,
    temp_c: number
}

export interface WeatherDay {
    day: SingularDay,
    hour: SingularHour[],
    date: string
}

export interface ForecastDay {
    forecastday: WeatherDay[]
}

export interface WeatherResponse {
    location: LocationWeather,
    current: CurrentWeather,
    error?: string,
    forecast: ForecastDay
}

export interface ForecastResponse {
    current: CurrentWeather,
    forecast: ForecastDay,
    location: Location
}

interface Condition {
    icon: string,
    text: string
}

export interface LocationHour {
    localtime: string
}

export interface WeatherState {
    data: WeatherResponse[],
    customSearch: WeatherResponse[],
    forecastData: ForecastResponse[],
    status: "idle" | "pending" | "fulfilled" | "rejected",
    error: string | undefined | null
}

export interface NewsResponse {
    totalArticles: number,
    articles: Articles[];
}

interface Articles {
    source: {
        url: string
        name: string
    },
    title: string,
    description: string,
    content: string
    url: string,
    image: string,
    publishedAt: string,
    
}

export interface NewsState {
    weatherData: NewsResponse[],
    globalData: NewsResponse[],
    status: string,
    error: string | null
}

export interface DateProp {
    localtime: string
}
