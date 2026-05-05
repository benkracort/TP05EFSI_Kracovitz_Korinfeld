import axios from 'axios'

const api = axios.create({
    baseURL: 'https://www.omdbapi.com',
    params: { apikey: 'a56597f8' }
})

export default api