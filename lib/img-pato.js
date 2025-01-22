// lib/img-pato.js
import axios from 'axios';

export async function dlpato() {
  try {
    const response = await axios.get('https://random-d.uk/api/randomimg'); 
    return response.data.url;
  } catch (error) {
    console.error('Error al obtener imagen de pato:', error);
  }
}
