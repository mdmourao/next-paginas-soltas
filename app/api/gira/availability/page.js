//
// alterantivamente,  importei aos dados JSON. mas nao funciona. 
// a API mas nao faz nada, nao retorna. 

import bikeLanesGeoJSON from '/public/gira.json'

export default async function handler(req, res) {
  try {

    //
    // nao esta a funcionar...
    
    // const apiResponse = await fetch('https://opendata.emel.pt/cycling/gira/station/availability'); // Replace with the actual API endpoint
    // const bikeLanesGeoJSON = await apiResponse.json();

    res.status(200).json(bikeLanesGeoJSON);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data from API' });
  }
}

