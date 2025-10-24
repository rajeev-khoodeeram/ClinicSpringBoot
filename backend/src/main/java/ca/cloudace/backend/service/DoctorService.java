package ca.cloudace.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import ca.cloudace.backend.model.Doctor;
import ca.cloudace.backend.repository.DoctorRepository;


@Service
public class DoctorService {

    private final DoctorRepository doctorRepository;

    public DoctorService(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    public List<Doctor> findAllDoctors() {
        return doctorRepository.findAll();
    }

    public Doctor findDoctorById(int id) {
        return doctorRepository.findById(id).orElse(null);
    }

    public Doctor saveDoctor(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    public Doctor deleteDoctor(int id) {
        Doctor doctor = findDoctorById(id);
        if (doctor != null) {
            doctorRepository.deleteById(id);
        }
        return doctor;
    }

    /**
     * Updates an existing doctor.
     * @param id
     * @param doctor
     * @return
     */
    public Doctor updateDoctor(int id, Doctor doctor) {
        if (doctorRepository.existsById(id)) {
            doctor.setDoctorId(id);
            return doctorRepository.save(doctor);
        }
        return null;
    }

}
