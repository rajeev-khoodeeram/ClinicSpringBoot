import invoice from "../assets/invoice.png";
import appointment from "../assets/appointment.png";
import patient from "../assets/patient.png";
import prescription from "../assets/prescription.png";
import doctorphoto from "../assets/doctorphoto.png";

import "./Dashboard.css";


const Dashboard: React.FC = () => {
    return (
        <div>
            <h2>Dashboard</h2>

    <div className="dashboard-icons">
        <div className="icon">
            <a href="/doctors">
                <img src={doctorphoto} alt="Doctors" />
                <p>Doctors</p>
            </a>
        </div>

        <div className="icon">
            <img src={invoice} alt="Invoices" />
            <p>Invoices</p>
        </div>
        <div className="icon">
            <img src={appointment} alt="Appointments" />
            <p>Appointments</p>
        </div>
        <div className="icon">
            <img src={patient} alt="Patients" />
            <p>Patients</p>
        </div>
        <div className="icon">
            <img src={prescription} alt="Prescriptions" />
            <p>Prescriptions</p>
        </div>
    </div>

</div>
);
}   
export default Dashboard;
