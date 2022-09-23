import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://immense-tor-96559.herokuapp.com'
});

export default instance;