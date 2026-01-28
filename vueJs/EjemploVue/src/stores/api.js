import axios from 'axios'

const api = axios.create({
  baseURL: 'https://www.dragonball-api.com/api',
})


// Manejar expiración de sesión
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      
      console.warn('Sesión expirada. Redirigiendo al login...')

    }
    return Promise.reject(err)
  },
)

export { api }


export async function getPersonajes() {
  const { data } = await api.get('/characters')
  return data
}

export async function updatePersonajes(id, data) {
  return api.put(`/api/salas/${id}`, data)
}

export async function createPersonaje(reservaData) {
  await api.get('/sanctum/csrf-cookie')
  return api.post('/api/reservas', reservaData)
}
