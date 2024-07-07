// index.mjs
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3000; // Escolha uma porta para o servidor proxy

app.use(cors());


//
// Route for GIRA API

app.get('/api/station/availability', async (req, res) => {
  const apiUrl = 'https://opendata.emel.pt/cycling/gira/station/availability';
  
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    res.status(500).send('Erro ao buscar dados');
  }
});


//
// Route for IPMA API

app.get('/api/ipma/lisboa', async (req, res) => {
  const apiUrl = 'https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/1010500.json';
  
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    res.status(500).send('Erro ao buscar dados');
  }
});


//
// Route for weatherClass IPMA API

app.get('/api/ipma/weather-class', async (req, res) => {
  const apiUrl = 'https://api.ipma.pt/open-data/weather-type-classe.json';
  
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    res.status(500).send('Erro ao buscar dados');
  }
});
app.listen(PORT, () => {
  console.log(`Servidor proxy está rodando em http://localhost:${PORT}`);
});
