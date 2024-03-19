// Status code constants
export const STATUS_CODES = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
};

// Base URL
const baseURL = 'http://10.249.146.161:8080/v1';

// Fetch function with interceptor
const fetchWithInterceptor = async (url, options) => {
    // Add authorization header to the request
    options.headers = {
        ...options.headers,
        'Content-Type': 'application/json',
    };

    try {
        const response = await fetch(url, options);

        // Check if response is ok
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Return response data
        return response.json();
    } catch (error) {
        console.error('Fetch error: ', error);
        throw error;
    }
};

// HTTP methods
export const get = (url, params) => fetchWithInterceptor(`${baseURL}/${url}?${new URLSearchParams(params).toString()}`, { method: 'GET' });
export const post = (url, data) => fetchWithInterceptor(`${baseURL}/${url}`, { method: 'POST', body: JSON.stringify(data) });
export const put = (url, data) => fetchWithInterceptor(`${baseURL}/${url}`, { method: 'PUT', body: JSON.stringify(data) });
export const patch = (url, data) => fetchWithInterceptor(`${baseURL}/${url}`, { method: 'PATCH', body: JSON.stringify(data) });
export const del = (url) => fetchWithInterceptor(`${baseURL}/${url}`, { method: 'DELETE' });
