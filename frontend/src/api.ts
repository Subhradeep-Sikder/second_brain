import axios from "axios";

export const api = axios.create({
  // Hardcoded to point to your Node server
  baseURL: "http://localhost:3000/api/v1", 
});