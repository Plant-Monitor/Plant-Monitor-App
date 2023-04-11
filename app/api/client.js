import { create } from 'apisauce';

const apiClient = create({
    baseURL: 'https://fc39-130-113-109-103.ngrok.io' // Use your local network IP
})

export default apiClient;
