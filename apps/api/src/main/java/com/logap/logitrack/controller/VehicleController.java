package com.logap.logitrack.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.logap.logitrack.dto.VehicleResponse;
import com.logap.logitrack.service.VehicleService;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping
public class VehicleController {
    private final VehicleService vehicleService;

    VehicleController(VehicleService vehicleService) {
        this.vehicleService = vehicleService;
    }

    @GetMapping("/vehicles")
    public List<VehicleResponse> allVehicles() {
        return vehicleService.allVehicles();
    }

}
