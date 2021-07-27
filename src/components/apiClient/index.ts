import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_SERVERURL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("mindmailtoken"),
  },
});

export default apiClient;
