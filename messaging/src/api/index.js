import axios from 'axios';

// TODO: Update
const API_BASE_URL = 'http://localhost:8880';

const client = axios.create({
  baseURL: API_BASE_URL + '/'
});

function createHeaders() {
  return {
    headers: {
      'Content-Type': 'application/json'
    }
  };
}

export function fetchSources() {
  return client.get('/source', createHeaders());
}
