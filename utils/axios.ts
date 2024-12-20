import axios from "axios";

//1. set the registered page
//2. set the login and verify-email page
//3. after checking the verify-email page check cookie or session
export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});
