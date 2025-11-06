import axios from "axios";

const API_URL = "https://dragonball-api.com/api";

export const getCharacters = async () => {
  const response = await axios.get(`${API_URL}/characters`);
  return response.data.items; // la API devuelve un objeto con 'items'
};

export const getEntities = async () => {
  const response = await axios.get(`${API_URL}/planets`);
  return response.data.items;
};
