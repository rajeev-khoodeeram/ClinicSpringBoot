import {type  Doctor } from "../../types/Doctor";
import { useEffect, useState } from "react";
import { getDoctors, deleteDoctor } from "../../services/DoctorService";
import './DoctorList.css';
import { useNavigate } from "react-router-dom";

const DoctorList = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
   const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const doctorsData = await getDoctors();
        setDoctors(doctorsData);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);


  const handleDelete = (doctorId: number) => {
    // Implement delete functionality here
    console.log("Deleting doctor with ID:", doctorId);
    // Call the deleteDoctor function from the DoctorService

    deleteDoctor(doctorId)
      .then(() => {
        console.log("Doctor deleted successfully");
        // Optionally, you can refresh the doctor list or remove the deleted doctor from the state
        setDoctors(doctors.filter(doctor => doctor.doctorId !== doctorId));
      })
      .catch((error) => {
        console.error("Error deleting doctor:", error);
      });

  };

  return (
    <div>
      <h2>List of Doctors in Service</h2>
      <div className="add-doctor">
      <a href="/doctors/create">Create New Doctor</a>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Specialization</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.doctorId}>
              <td>{doctor.doctorId}</td>
              <td>{doctor.doctorFirstName}</td>
              <td>{doctor.doctorLastName}</td>
              <td>{doctor.doctorSpecialization}</td>
              <td>{doctor.doctorPhoneNumber}</td>
              <td>{doctor.doctorEmail}</td>
              <td>
                <button onClick={() => navigate(`/doctors/edit/${doctor.doctorId}`)}>Edit</button>
                <button onClick={() => handleDelete(doctor.doctorId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorList;
