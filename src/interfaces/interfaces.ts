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
    wind_kph: number
}

export interface WeatherResponse {
    location: LocationWeather,
    current: CurrentWeather
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
    status: "idle" | "pending" | "fulfilled" | "rejected",
    error: string | null
}
