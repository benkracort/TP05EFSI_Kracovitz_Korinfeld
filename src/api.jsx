import axios from 'axios'

const api = axios.create({
    baseURL: 'https://www.omdbapi.com',
    params: { apikey: 'c31624d7' }
})

export default api