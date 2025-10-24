import React, { useEffect, type FormEvent } from "react";
import { createDoctor, updateDoctor } from "../../services/DoctorService";
import { useNavigate, useParams } from "react-router-dom";
import  "./DoctorCreate.css"
import doctorphoto from '../../assets/doctorphoto.png';


const DoctorForm : React.FC = () => {

    const [doctorId, setDoctorId] = React.useState<number>(0);
    const [doctorFirstName, setDoctorFirstName] = React.useState<string>('');
    const [doctorLastName, setDoctorLastName] = React.useState<string>('');
    const [doctorSpecialization, setDoctorSpecialization] = React.useState<string>('');
    const [doctorPhoneNumber, setDoctorPhoneNumber] = React.useState<string>('');
    const [doctorEmail, setDoctorEmail] = React.useState<string>('');
    const navigate  = useNavigate();
    const {id} = useParams<{id: string}>(); // getting any id parameter passed
    const isEditMode = Boolean(id); //will check if we are in edit or create mode, if id is present, then true
    const API_URL = import.meta.env.VITE_API_URL + "/doctors";

    //We will need a way of populating the form in case, we are editing !!
    useEffect(() => {
        if (isEditMode) {
            const fetchDoctor = async () => {
                const response = await fetch(`${API_URL}/${id}`);
                const data = await response.json();
                setDoctorId(data.doctorId);
                setDoctorFirstName(data.doctorFirstName);
                setDoctorLastName(data.doctorLastName);
                setDoctorSpecialization(data.doctorSpecialization);
                setDoctorPhoneNumber(data.doctorPhoneNumber);
                setDoctorEmail(data.doctorEmail);
            };
            fetchDoctor();
        }
    }, [isEditMode, id, API_URL]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let doctor = null;
        

        // Handle form submission
        //added for debugging
        console.log("Submitting doctor form:", {
            doctorId,
            doctorFirstName,
            doctorLastName,
            doctorSpecialization,
            doctorPhoneNumber,
            doctorEmail
        });


        //check if all fields have values
        if (
            doctorFirstName &&
            doctorLastName &&
            doctorSpecialization &&
            doctorPhoneNumber &&
            doctorEmail
        ) {
            // All fields are filled, proceed with form submission
            console.log("All fields are filled. Submitting form...");
            // Here you can add your form submission logic, e.g., API call

            doctor = {
                doctorId,
                doctorFirstName,
                doctorLastName,
                doctorSpecialization,
                doctorPhoneNumber,
                doctorEmail
            };

            //if id is present, we are in edit mode
            if (isEditMode) {
                // Call the updateDoctor function with the doctorId and updated doctor object
                updateDoctor(doctorId, doctor)
                    .then((response) => {
                        console.log("Doctor updated successfully:", response);

                        // Optionally, reset the form fields here
                        setDoctorId(0);
                    setDoctorFirstName('');
                    setDoctorLastName('');
                    setDoctorSpecialization('');
                    setDoctorPhoneNumber('');
                    setDoctorEmail('');

                    // Navigate to the doctors list page
                    navigate('/doctors');

                })
                .catch((error) => {
                    console.error("Error creating doctor:", error);
                });

        }else{
            createDoctor(doctor)
                .then((response) => {
                    console.log("Doctor created successfully:", response);

                    // Optionally, reset the form fields here
                    setDoctorId(0);
                    setDoctorFirstName('');
                    setDoctorLastName('');
                    setDoctorSpecialization('');
                    setDoctorPhoneNumber('');
                    setDoctorEmail('');

                    // Navigate to the doctors list page
                    navigate('/doctors');

                })
                .catch((error) => {
                    console.error("Error creating doctor:", error);
                });
        }}
        else {
            console.log("Please fill in all fields.");
        }

    };

    return (
        <div className="add-doctor-form">
            <img src={doctorphoto} alt="Doctor" className="doctor-image"  width="20%" />
            <h2>{isEditMode ? 'Edit Doctor' : 'Create Doctor'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="doctorFirstName">First Name</label>
                    <input type="text" id="doctorFirstName"  value={doctorFirstName} onChange={(e) => setDoctorFirstName(e.target.value)} />
                </div>
            <div className="form-group">
                <label htmlFor="doctorLastName">Last Name</label>
                <input type="text" id="doctorLastName" value={doctorLastName} onChange={(e) => setDoctorLastName(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="doctorSpecialization">Specialization</label>
                <input type="text" id="doctorSpecialization" value={doctorSpecialization} onChange={(e) => setDoctorSpecialization(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="doctorPhone">Phone Number</label>
                <input type="text" id="doctorPhone" value={doctorPhoneNumber} onChange={(e) => setDoctorPhoneNumber(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="doctorEmail">Email</label>
                <input type="email" id="doctorEmail" value={doctorEmail} onChange={(e) => setDoctorEmail(e.target.value)} />
            </div>
            <button type="submit">{isEditMode ? 'Update Doctor' : 'Create Doctor'}</button>
        </form>
    </div>
);
};


export default DoctorForm;