package com.logap.logitrack.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.logap.logitrack.dto.VehicleResponse;
import com.logap.logitrack.repository.VehicleRepository;

@Service
public class VehicleService {
    private final VehicleRepository vehicleRepository;

    public VehicleService(VehicleRepository vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }

    public List<VehicleResponse> allVehicles() {
        return vehicleRepository.allVehicles();
    }

}
