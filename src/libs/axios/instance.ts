import environment from "@/config/environment";
import axios from "axios";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

const headers = {
  "Content-Type": "application/json",
};

const instance = axios.create({
  baseURL: environment.API_URL,
  headers,
  timeout: 60 * 1000,
});

instance.interceptors.request.use(
  async (request) => {
    const session: Session | null = await getSession();
    if (session && session.accessToken) {
      request.headers.Authorization = `Bearer ${session.accessToken}`;
    }
    return request;
  },
  (error) => {
    Promise.reject(error);
  },
);

instance.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    Promise.reject(error);
  },
);

export default instance;
