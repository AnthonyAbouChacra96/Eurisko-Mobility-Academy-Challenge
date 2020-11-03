
import axios from 'axios';
const Movieaxios = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/discover/tv?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0",
});

export default Movieaxios;
