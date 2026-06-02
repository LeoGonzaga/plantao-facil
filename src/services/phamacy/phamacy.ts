import { AxiosRequestConfig } from "axios";
import { request } from "../api";
import { SHEET_ID } from "@src/constants/sheet-id";

export const getOnCall = async () => {
  const payload: AxiosRequestConfig = {
    method: "GET",
    url: `/d/${SHEET_ID}/gviz/tq?tqx=out:json`,
  };

  const data = await request(payload);
  return data;
};

export const getAll = async () => {
  const payload: AxiosRequestConfig = {
    method: "GET",
    url: `/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=Farmacias`,
  };

  const data = await request(payload);
  return data;
};
