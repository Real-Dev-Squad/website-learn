import { DATA_TYPES } from "@/constants";

export function getData(key, format = DATA_TYPES.JSON) {
  const data = localStorage.getItem(key);
  if(!data) return null;
  switch(format) {
    case DATA_TYPES.JSON: return JSON.parse(data);
    case DATA_TYPES.INTEGER: return Number.parseInt(data);
  }
}

export function setData(key, data) {
	localStorage.setItem(key, JSON.stringify(data));
}

export function clearData(key) {
	localStorage.removeItem(key);
}
