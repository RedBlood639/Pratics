import axios from "axios";

export const apiClientwithToken = (token: any) => {
  const apiClient = axios.create({
    baseURL: process.env.REACT_APP_SERVERURL,
    responseType: "json",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  return apiClient;
};
