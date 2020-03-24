import axios from 'axios';

// Creating an Api Variable from Github Request
const github = axios.create({
    baseURL: 'https://api.github.com'
})

export default github
