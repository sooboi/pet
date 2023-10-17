import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNightContext } from "../context/NightContext";

export default function Weather() {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const [data, setData] = useState(null);
  const [selectedCity, setSelectedCity] = useState("Seoul");
  const { toggleNight, nightMod } = useNightContext();

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
          <Select value={selectedCity} onChange={handleCityChange}>
            <option value={"Seoul"}>서울</option>
            <option value={"Incheon"}>인천</option>
            <option value={"Seongnam"}>성남</option>
            <option value={"Anyang"}>안양</option>
            <option value={"Goyang"}>고양</option>
            <option value={"Suwon"}>수원</option>
            <option value={"Busan"}>부산</option>
            <option value={"Daegu"}>대구</option>
            <option value={"Gwangju"}>광주</option>
            <option value={"Daejeon"}>대전</option>
            <option value={"Ulsan"}>울산</option>
          </Select>
          날씨
        </div>
        <IconImg src={weatherIconUrl} alt="Weather Icon" />
        <p>{weather[0].description}</p>
      </Item1>
      <Item2>
        <li>온도: {celsiusTemp}°C</li>
        <li>체감 온도: {Math.round(feels_like - 273.15)}°C</li>
        <li>습도: {humidity}%</li>
        <li>풍속: {speed} m/s</li>
        <li>구름 양: {all}%</li>
      </Item2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.nightMod ? "black" : "white")};
  /* background-color: rgba(0, 0, 0, 0.1); */
  background-color: ${(props) =>
    props.nightMod ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.9)"};
  padding: 5px;
  font-family: "Dovemayo_gothic";
  transition: all 0.5s;
`;

const Item1 = styled.div`
  display: flex;
  align-items: center;
`;

const Select = styled.select`
  border: none;
  font-family: "Dovemayo_gothic";
  font-size: 18px;
  border-bottom: 1px solid black;
  background-color: inherit;
  outline: none;
  color: ${({ theme }) => theme.logo};
`;

const Item2 = styled.ul`
  display: flex;
  list-style: none;
  & > li {
    margin-right: 1rem;
  }
`;

const IconImg = styled.img`
  width: 30px;
  height: 30px;
`;
