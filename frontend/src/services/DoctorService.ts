import { type Doctor } from "../types/Doctor";
const API_URL = import.meta.env.VITE_API_URL;

export const getDoctors = async (): Promise<Doctor[]> => {
  const response = await fetch(`${API_URL}/doctors`);
  console.log('API_URL:', API_URL);
  
  if (!response.ok) {
    throw new Error('Failed to fetch doctors');
  }
  return response.json();
};
