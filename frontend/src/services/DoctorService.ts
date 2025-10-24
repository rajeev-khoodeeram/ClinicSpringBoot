import { type Doctor } from "../types/Doctor";
const API_URL = import.meta.env.VITE_API_URL;

/**
 * Get all doctors
 * @return a list of doctors in json format
 */
export const getDoctors = async (): Promise<Doctor[]> => {
  const response = await fetch(`${API_URL}/doctors`);
  console.log('API_URL:', API_URL);
  
  if (!response.ok) {
    throw new Error('Failed to fetch doctors');
  }
  return response.json();
};

/**
 * Create a doctor
 * @param doctor 
 * @return the created doctor in json format
 */
export const createDoctor = async (doctor: Doctor): Promise<Doctor> => {
  const response = await fetch(`${API_URL}/doctors`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(doctor),
  });

  if (!response.ok) {
    throw new Error('Failed to create doctor');
  }
  return response.json();
};


/**
 * Update a doctor
 * @param doctorId
 * @param updatedData
 * @returns
 */
export const updateDoctor = async (doctorId: number, updatedData: Partial<Doctor>): Promise<Doctor> => {
  const response = await fetch(`${API_URL}/doctors/${doctorId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });

  if (!response.ok) {
    throw new Error('Failed to update doctor');
  }
  return response.json();
};


/**
 * Delete a doctor (let us put a confirmation dialog)
 * @param doctorId
 * @returns
 */
export const deleteDoctor = async (doctorId: number): Promise<void> => {
  if (confirm("Are you sure you want to delete this doctor?")) {
    
  const response = await fetch(`${API_URL}/doctors/${doctorId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete doctor');
  }

  return response.json();
}
};
