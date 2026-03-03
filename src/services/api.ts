import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json'
  }
})

// Função auxiliar para decodificar JWT
export const decodeJWT = (token: string) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Erro ao decodificar JWT:', error);
    return null;
  }
}

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@MorarAqui:token');
  console.log('Token no interceptor:', token);
  console.log('Headers antes:', config.headers);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  console.log('Headers depois:', config.headers);
  return config;
})