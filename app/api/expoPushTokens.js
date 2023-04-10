import client from './client';
const register = (pushToken) => client.post('/push/register', { user_id: '68a07386-d07c-49b7-ae18-a15b4c8c21fb', token: pushToken });
export default {
    register,
}