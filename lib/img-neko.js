// lib/img-neko.js
import fetch from 'node-fetch';

export async function dlneko() {
  try {
    const response = await fetch('https://nekos.life/api/v2/img/neko');
    const data = await response.json();  
    const imageUrl = data.url;  
    return imageUrl;
  } catch (error) {
    console.error('Error al obtener imagen de neko:', error);
  }
}
