//img-gato.js
import axios from 'axios';

export async function dlgato() {
  try {
    const response = await axios.get('https://some-random-api.com/animal/cat');
    const imageUrl = response.data.image;
    return imageUrl; 
  } catch (error) {
    console.error('Error al obtener imagen de gato:', error);
  }
}
