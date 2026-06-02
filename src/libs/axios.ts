import axios from "axios";

export const URL = axios.create({
  baseURL: `https://docs.google.com/spreadsheets/`,
});
