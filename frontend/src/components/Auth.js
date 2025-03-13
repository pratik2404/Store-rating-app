import API from "../api";

const Auth = {
    // Save token in local storage
    login: async (email, password) => {
        try {
            const response = await API.post("/auth/login", { email, password });
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("role", response.data.role); // Store role for role-based access
            return response.data;
        } catch (error) {
            throw new Error("Invalid credentials. Please try again.");
        }
    },

    // Register a new user
    register: async (name, email, password, address, role = "user") => {
        try {
            const response = await API.post("/auth/register", { name, email, password, address, role });
            return response.data;
        } catch (error) {
            throw new Error("Registration failed. Please try again.");
        }
    },

    // Logout and clear token from local storage
    logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        window.location.href = "/login"; // Redirect to login page
    },

    // Check if user is logged in
    isAuthenticated: () => {
        return !!localStorage.getItem("token");
    },

    // Get stored user role
    getUserRole: () => {
        return localStorage.getItem("role");
    }
};

export default Auth;
