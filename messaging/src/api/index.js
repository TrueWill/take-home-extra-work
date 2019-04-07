import axios from 'axios';

// TODO: Move to config
const API_BASE_URL = 'http://localhost:8880';

// This is **ONLY** an example.
// **NEVER** store tokens or passwords in git or any source code repository.
// Typically you would use OAuth 2 with an authorization server.
// For the demo, the client hardcodes a token generated with
// https://jwt.io/ using the secret 'DoNotUse' and the HS256 algorithm.
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkJpbGwiLCJpYXQiOjE1MTYyMzkwMjJ9.C_Dhi8YKg4Qokrrv6xxEXM_Bqk0XfEexn1Efjm3Wppw';

const client = axios.create({
  baseURL: API_BASE_URL + '/'
});

function createHeaders() {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    }
  };
}

export function fetchSources() {
  return client.get('/source', createHeaders());
}

export function fetchSource(id) {
  return client.get(`/source/${id}`, createHeaders());
}

// status (filter) is optional
export function fetchMessagesForSource(sourceId, status) {
  const queryString = status ? '?status=' + status : '';

  return client.get(
    `/source/${sourceId}/message${queryString}`,
    createHeaders()
  );
}

export function fetchMessageStatusCountsForSource(sourceId) {
  return client.get(`/source/${sourceId}/message/status`, createHeaders());
}

export function createSource(values) {
  return client.post('/source', values, createHeaders());
}

export function updateSource(sourceId, values) {
  return client.put(`/source/${sourceId}`, values, createHeaders());
}

export function deleteSource(sourceId) {
  return client.delete(`/source/${sourceId}`, createHeaders());
}
