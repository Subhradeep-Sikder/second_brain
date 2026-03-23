import axios from "axios";
import { BACKEND_URL } from "./config";


export const api = axios.create({
  // Hardcoded to point to your Node server
  baseURL: BACKEND_URL,
});