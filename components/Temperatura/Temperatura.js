"use client";

import React from 'react';
import useSWR from 'swr';
import TemperaturaDia from '../../components/TemperaturaDia/TemperaturaDia'

const fetcher = url => fetch(url).then(res => res.json());

export default function Temperatura() {

  // const { weatherData, error } = useSWR('https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/1010500.json', fetcher);
  // if (error) return <div>Error loading data</div>;
  // if (!weatherData) return <div>Loading weatherData...</div>;

  const weatherData = {"owner": "IPMA", "country": "PT", "data": [{"precipitaProb": "0.0", "tMin": "17.2", "tMax": "30.1", "predWindDir": "NW", "idWeatherType": 2, "classWindSpeed": 2, "longitude": "-9.1286", "forecastDate": "2024-07-05", "latitude": "38.7660"}, {"precipitaProb": "0.0", "tMin": "15.3", "tMax": "23.3", "predWindDir": "N", "idWeatherType": 3, "classWindSpeed": 2, "longitude": "-9.1286", "forecastDate": "2024-07-06", "latitude": "38.7660"}, {"precipitaProb": "0.0", "tMin": "14.2", "tMax": "22.3", "predWindDir": "N", "idWeatherType": 1, "classWindSpeed": 2, "longitude": "-9.1286", "forecastDate": "2024-07-07", "latitude": "38.7660"}, {"precipitaProb": "1.0", "tMin": "14.6", "tMax": "24.1", "predWindDir": "NW", "idWeatherType": 3, "classWindSpeed": 1, "longitude": "-9.1286", "forecastDate": "2024-07-08", "latitude": "38.7660"}, {"precipitaProb": "38.0", "tMin": "17.1", "tMax": "25.3", "predWindDir": "SW", "idWeatherType": 3, "classWindSpeed": 2, "longitude": "-9.1286", "forecastDate": "2024-07-09", "latitude": "38.7660"}], "globalIdLocal": 1110600, "dataUpdate": "2024-07-05T22:31:02"}

  // const { weatherTypeClass, errorClass } = useSWR('https://api.ipma.pt/open-data/weather-type-classe.json', fetcher);
  // if (errorClass) return <div>Error loading data</div>;
  // if (!weatherTypeClass) return <div>Loading weatherTypeClass...</div>;
  
  const weatherTypeClass = {"owner":"IPMA","country":"PT","data":[{"descWeatherTypeEN":"--","descWeatherTypePT":"---","idWeatherType":-99},{"descWeatherTypeEN":"No information","descWeatherTypePT":"Sem informação","idWeatherType":0},{"descWeatherTypeEN":"Clear sky","descWeatherTypePT":"Céu limpo","idWeatherType":1},{"descWeatherTypeEN":"Partly cloudy","descWeatherTypePT":"Céu pouco nublado","idWeatherType":2},{"descWeatherTypeEN":"Sunny intervals","descWeatherTypePT":"Céu parcialmente nublado","idWeatherType":3},{"descWeatherTypeEN":"Cloudy ","descWeatherTypePT":"Céu muito nublado ou encoberto","idWeatherType":4},{"descWeatherTypeEN":"Cloudy (High cloud)","descWeatherTypePT":"Céu nublado por nuvens altas","idWeatherType":5},{"descWeatherTypeEN":"Showers/rain","descWeatherTypePT":"Aguaceiros/chuva","idWeatherType":6},{"descWeatherTypeEN":"Light showers/rain","descWeatherTypePT":"Aguaceiros/chuva fracos","idWeatherType":7},{"descWeatherTypeEN":"Heavy showers/rain","descWeatherTypePT":"Aguaceiros/chuva fortes","idWeatherType":8},{"descWeatherTypeEN":"Rain/showers","descWeatherTypePT":"Chuva/aguaceiros","idWeatherType":9},{"descWeatherTypeEN":"Light rain","descWeatherTypePT":"Chuva fraca ou chuvisco","idWeatherType":10},{"descWeatherTypeEN":"Heavy rain/showers","descWeatherTypePT":"Chuva/aguaceiros forte","idWeatherType":11},{"descWeatherTypeEN":"Intermittent rain","descWeatherTypePT":"Períodos de chuva","idWeatherType":12},{"descWeatherTypeEN":"Intermittent ligth rain","descWeatherTypePT":"Períodos de chuva fraca","idWeatherType":13},{"descWeatherTypeEN":"Intermittent heavy rain","descWeatherTypePT":"Períodos de chuva forte","idWeatherType":14},{"descWeatherTypeEN":"Drizzle","descWeatherTypePT":"Chuvisco","idWeatherType":15},{"descWeatherTypeEN":"Mist","descWeatherTypePT":"Neblina","idWeatherType":16},{"descWeatherTypeEN":"Fog","descWeatherTypePT":"Nevoeiro ou nuvens baixas","idWeatherType":17},{"descWeatherTypeEN":"Snow","descWeatherTypePT":"Neve","idWeatherType":18},{"descWeatherTypeEN":"Thunderstorms","descWeatherTypePT":"Trovoada","idWeatherType":19},{"descWeatherTypeEN":"Showers and thunderstorms","descWeatherTypePT":"Aguaceiros e possibilidade de trovoada","idWeatherType":20},{"descWeatherTypeEN":"Hail","descWeatherTypePT":"Granizo","idWeatherType":21},{"descWeatherTypeEN":"Frost","descWeatherTypePT":"Geada","idWeatherType":22},{"descWeatherTypeEN":"Rain and thunderstorms","descWeatherTypePT":"Chuva e possibilidade de trovoada","idWeatherType":23},{"descWeatherTypeEN":"Convective clouds","descWeatherTypePT":"Nebulosidade convectiva","idWeatherType":24},{"descWeatherTypeEN":"Partly cloudy","descWeatherTypePT":"Céu com períodos de muito nublado","idWeatherType":25},{"descWeatherTypeEN":"Fog","descWeatherTypePT":"Nevoeiro","idWeatherType":26},{"descWeatherTypeEN":"Cloudy","descWeatherTypePT":"Céu nublado","idWeatherType":27},{"descWeatherTypeEN":"Snow showers","descWeatherTypePT":"Aguaceiros de neve","idWeatherType":28},{"descWeatherTypeEN":"Rain and snow","descWeatherTypePT":"Chuva e Neve","idWeatherType":29},{"descWeatherTypeEN":"Rain and snow","descWeatherTypePT":"Chuva e Neve","idWeatherType":30}]}
  
  const weatherTypeMap = {};
  weatherTypeClass.data.forEach(item => {
    weatherTypeMap[item.idWeatherType.toString()] = item.descWeatherTypePT;
  });


  return (
    <>
      <h2>Tempo</h2>
      <p>Informação extraída da <a href="https://api.ipma.pt/" target="_blank">API do IPMA</a>.</p>
      {weatherData.data.slice(0, 3).map(
        (forecast, index) =>
          <TemperaturaDia
            forecast={forecast}
            weatherTypeMap={weatherTypeMap}
          />
      )}
    </>
  );
}
