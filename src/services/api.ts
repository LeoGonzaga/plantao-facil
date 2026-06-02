import { URL } from "@src/libs/axios";
import { AxiosRequestConfig } from "axios";

export const request = async (options: AxiosRequestConfig) => {
  const data = await URL(options);
  return data.data;
};
