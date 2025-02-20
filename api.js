import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const signup = (formData) => API.post("/users/signup", formData);
export const login = (formData) => API.post("/users/login", formData);
export const registerEvent = (formData) => API.post("/events/register", formData);
export const fetchLeaderboard = () => API.get("/leaderboard/list");
export const generateCertificate = (data) => API.post("/certificates/generate", data);
