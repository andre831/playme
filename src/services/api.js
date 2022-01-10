import axios  from "axios";

const api_key = '8eab0fd0fac1aa1df5b878ec760a525b';

const baseURL = 'https://api.themoviedb.org/3/';

const api = axios.create({
    baseURL: baseURL
})

export {api, api_key}; 