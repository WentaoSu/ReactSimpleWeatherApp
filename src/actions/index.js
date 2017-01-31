import axios from 'axios';

//api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=51ea7fa74f6b3da111eb6f71e3907300
const API_KEY = '51ea7fa74f6b3da111eb6f71e3907300';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

console.log('Request:', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}