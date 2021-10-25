import axios from "axios";

const apiCli = axios.create({
    baseURL: 'http://localhost:8083',
    timeout: 1000
});

function getHomeStatus(options){
    return apiCli.get('/status', ...(options || {}));
}