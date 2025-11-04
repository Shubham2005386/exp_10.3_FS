export const BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000';
export const endpoints = {
register: () => `${BASE}/api/auth/register`,
login: () => `${BASE}/api/auth/login`,
posts: () => `${BASE}/api/posts`
};
export function authHeaders(withJson = true) {
const to
