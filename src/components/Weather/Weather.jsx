import axios from "axios";
import { useEffect, useState } from "react";
import { useNightContext } from "../../context/NightContext";
import { Wrapper, Item1, Item2, IconImg } from "./WeatherStyles";
import Select from "./Select";

export default function Weather() {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const [data, setData] = useState(null);
  const [selectedCity, setSelectedCity] = useState("Seoul");
  const { nightMod } = useNightContext();

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&lang=kr&appid=${apiKey}`;

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
  }, [selectedCity, apiKey]);

  if (data === null) {
    // 데이터가 도착하지 않았을 때
    return <div>Loading...</div>;
  }

  const {
    name,
    weather,
    main: { temp, feels_like, humidity },
    wind: { speed },
    clouds: { all },
  } = data;

  // 절대온도 -> 섭씨온도로 변경
  const celsiusTemp = Math.round(((temp - 273.15) * 10) / 10);

  // 날씨 아이콘 코드
  const weatherIconCode = data.weather[0].icon;

  // 아이콘 이미지 URL
  const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;

  return (
    <Wrapper nightMod={nightMod}>
      <Item1>
        <div>
          오늘의
          <Select
            selectedCity={selectedCity}
            handleCityChange={handleCityChange}
          />
          날씨
        </div>
        <IconImg src={weatherIconUrl} alt="Weather Icon" />
        <p>{weather[0].description}</p>
      </Item1>
      <Item2>
        <li>온도 : {celsiusTemp}°C</li>
        <li>체감 온도 : {Math.round(feels_like - 273.15)}°C</li>
        <li>습도 : {humidity}%</li>
        <li>바람 : {speed} m/s</li>
        <li>구름 양 : {all}%</li>
      </Item2>
    </Wrapper>
  );
}
