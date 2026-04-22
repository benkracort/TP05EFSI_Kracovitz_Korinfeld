import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.imdbapi.dev'
})

export default api