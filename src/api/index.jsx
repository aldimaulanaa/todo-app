import axios from 'axios';
import { APIConfiguration } from '@/configs/api.config';

export const customAxios = axios.create({
  baseURL: APIConfiguration.baseURL,
  headers: {
    'API-Key': APIConfiguration.APIKey,
    'Content-Type': 'application/json',
  },
});

export const customGet = async (url, params = {}) => {
  try {
    const response = await customAxios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("GET request error:", error);
    throw error;
  }
};

export const customPost = async (url, data = {}) => {
  try {
    const response = await customAxios.post(url, data);
    return response.data;
  } catch (error) {
    console.error("POST request error:", error);
    throw error;
  }
};

export const customDelete = async (url, data = {}) => {
  try {
    const response = await customAxios.post(url, data);
    return response.data;
  } catch (error) {
    console.error("Delete request error:", error);
    throw error;
  }
};
