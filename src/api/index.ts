import axios from "axios";

export const api = axios.create({
  baseURL: "https://moore-serve.vercel.app/",
});
