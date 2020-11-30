import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://city-aa427.firebaseio.com/'
});

export default instance;