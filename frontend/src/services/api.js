// Simple API service to connect to backend
const API_BASE_URL = "http://localhost:8080/api/v1";

// Helper function to make API calls
const apiCall = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};

// Restaurant API calls
export const restaurantAPI = {
  getAll: () => apiCall("/restaurant"),
  getById: (id) => apiCall(`/restaurant/${id}`),
  create: (data) =>
    apiCall("/restaurant", { method: "POST", body: JSON.stringify(data) }),
};

// Category API calls
export const categoryAPI = {
  getAll: () => apiCall("/category"),
  getById: (id) => apiCall(`/category/${id}`),
  create: (data) =>
    apiCall("/category", { method: "POST", body: JSON.stringify(data) }),
};

// Food API calls
export const foodAPI = {
  getAll: () => apiCall("/food"),
  getById: (id) => apiCall(`/food/${id}`),
  create: (data) =>
    apiCall("/food", { method: "POST", body: JSON.stringify(data) }),
};

// Auth API calls
export const authAPI = {
  login: (credentials) =>
    apiCall("/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    }),
  register: (userData) =>
    apiCall("/auth/register", {
      method: "POST",
      body: JSON.stringify(userData),
    }),
};

export default apiCall;
