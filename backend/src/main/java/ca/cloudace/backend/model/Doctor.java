package ca.cloudace.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "doctor")
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "doctor_id")
    private int doctorId;

    @Column(name = "doctor_firstname")
    private String doctorFirstName;

    @Column(name = "doctor_lastname")
    private String doctorLastName;

    @Column(name = "doctor_specialization")
    private String doctorSpecialization;

    @Column(name = "doctor_phonenumber")
    private String doctorPhoneNumber;

    @Column(name = "doctor_email")
    private String doctorEmail;

    public Doctor() {
    }
    public Doctor(int id, String firstName, String lastName, String specialization, String phone, String email) {
        this.doctorId = id;
        this.doctorFirstName = firstName;
        this.doctorLastName = lastName;
        this.doctorSpecialization = specialization;
        this.doctorPhoneNumber = phone;
        this.doctorEmail = email;
    }

    public int getDoctorId() {
        return doctorId;
    }

    public String getDoctorFirstName() {
        return doctorFirstName;
    }

    public String getDoctorLastName() {
        return doctorLastName;
    }

    public String getDoctorSpecialization() {
        return doctorSpecialization;
    }

    public String getDoctorPhoneNumber() {
        return doctorPhoneNumber;
    }

    public String getDoctorEmail() {
        return doctorEmail;
    }


    public void setDoctorId(int doctorId) {
        this.doctorId = doctorId;
    }

    public void setDoctorFirstName(String doctorFirstName) {
        this.doctorFirstName = doctorFirstName;
    }

    public void setDoctorLastName(String doctorLastName) {
        this.doctorLastName = doctorLastName;
    }

    public void setDoctorSpecialization(String doctorSpecialization) {
        this.doctorSpecialization = doctorSpecialization;
    }

    public void setDoctorPhoneNumber(String doctorPhoneNumber) {
        this.doctorPhoneNumber = doctorPhoneNumber;
    }

    public void setDoctorEmail(String doctorEmail) {
        this.doctorEmail = doctorEmail;
    }

}
