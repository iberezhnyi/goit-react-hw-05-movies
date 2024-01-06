import axios from 'axios';

const ACCESS_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzdlODZlMzdkODU4ZTMyMzQ4NzFmNmY5ZjA1ZDcwNiIsInN1YiI6IjY1OTNiYjk0ZTY0MGQ2N2Y0MGQ2OTZjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._7mJ2kp5OrC3s16OXvB-SxM-uab1Y1UFJSFYt7tRN9g';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization: ACCESS_TOKEN,
  },
});

export default api;
