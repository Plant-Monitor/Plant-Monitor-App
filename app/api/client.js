import { create } from 'apisauce';

const apiClient = create({
    baseURL: 'https://519b-24-141-37-46.ngrok.io' // Use your local network IP
})

export default apiClient;
