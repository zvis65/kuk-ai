import axios from 'axios'

const API_BASE = 
    import.meta.env.API_URL

const api = axios.create({
    baseURL: API_BASE,
    timeout: 10000
})

api.interceptors.request.use(config => {
    const stored = localStorage.getItem('kukai_auth');
    let token = null;
    if (stored) {
        try {
            token = JSON.parse(stored).access_token;
        } catch {}
    }
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    response => response,
    error => {
        return Promise.reject(error);
    }
);

export async function login({ email, password }){
    const response = await api.post("/api/v1/auth/login", {
        email, password
    })

    return response.data;
}

export async function register({ name, email, password }){
    const response = await api.post("/api/v1/auth/register", {
       name, email, password
    })

    return response.data;
}