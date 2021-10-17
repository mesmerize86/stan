import axios from 'axios';


export const StanAPI = () => {
  const instance = axios.create({ baseURL: 'http://localhost:3000' });
  return instance;
};