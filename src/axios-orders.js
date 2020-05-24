import axios from "axios";

const instance = axios.create({
    baseURL: 'https://my-burger-app-2e68b.firebaseio.com/'
});

export default instance;