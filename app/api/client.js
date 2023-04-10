import { create } from 'apisauce';

const apiClient = create({
    baseURL: 'https://a56c-130-113-109-113.eu.ngrok.io' // Use your local network IP
})

export default apiClient;
