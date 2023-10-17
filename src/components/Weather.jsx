import axios from "axios";
import { useEffect, useState } from "react";

export default function Weather() {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.5833&lon=127&lang=kr&appid=${apiKey}`;

  const [data, setData] = useState(null); // 초기에 null로 설정

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        const weatherData = res.data;
        setData(weatherData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (data === null) {
    // 데이터가 도착하지 않았을 때
    return <div>Loading...</div>;
  }

  console.log(data);

  const {
    name,
    weather,
    main: { temp, feels_like, humidity },
    wind: { speed },
    clouds: { all },
  } = data;

  const celsiusTemp = Math.round(((temp - 273.15) * 10) / 10);

  // 날씨 아이콘 코드
  const weatherIconCode = data.weather[0].icon;

  // 아이콘 이미지 URL
  const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;

  return (
    <div>
      <h2>오늘의 날씨:</h2>
      <p>
        날씨: <img src={weatherIconUrl} alt="Weather Icon" />
      </p>
      <p>상태: {weather[0].description}</p>
      <p>온도: {celsiusTemp}°C</p>
      <p>체감 온도: {Math.round(feels_like - 273.15)}°C</p>
      <p>습도: {humidity}%</p>
      <p>풍속: {speed} m/s</p>
      <p>구름 양: {all}%</p>
    </div>
  );
}
