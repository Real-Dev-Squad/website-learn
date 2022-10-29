import { LOCAL_STORAGE_DATA_TYPES } from "@/constants/local-storage";

export function getData(key, format = LOCAL_STORAGE_DATA_TYPES.JSON) {
  const data = localStorage.getItem(key);
  if(!data) return null;
  switch(format) {
    case LOCAL_STORAGE_DATA_TYPES.JSON: return JSON.parse(data);
    case LOCAL_STORAGE_DATA_TYPES.INTEGER: return Number.parseInt(data);
  }
}

export function setData(key, data) {
	localStorage.setItem(key, JSON.stringify(data));
}

export function clearData(key) {
	localStorage.removeItem(key);
}
