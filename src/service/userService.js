import axios from "axios";


const API_URL = import.meta.env.VITE_API_URL;
export const loginUser = async (email, password) => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.post(
      `${API_URL}/login`,
      { email, password }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Login failed");
  }
};

export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/api/users/signup`,
       userData
      );
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || "Signup failed");
  }
};