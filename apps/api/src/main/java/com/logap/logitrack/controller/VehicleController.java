package com.logap.logitrack.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.logap.logitrack.dto.VehicleResponse;
import com.logap.logitrack.service.VehicleService;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
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
