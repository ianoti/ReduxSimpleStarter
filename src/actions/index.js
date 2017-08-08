import axios from 'axios';
const API_KEY="b437ad1bc16925206a23557b500290f9";
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";
export function fetchWeather(city, country_code="ke") {
  const url = `${ROOT_URL}&q=${city},${country_code}`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
