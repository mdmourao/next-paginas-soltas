import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const apiResponse = await fetch('https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/1010500.json'); // Replace with the actual API endpoint
    const data = await apiResponse.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data from API' });
  }
}
