package com.logap.logitrack.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.logap.logitrack.dto.CategoryVolumeResponse;
import com.logap.logitrack.dto.TotalKmResponse;
import com.logap.logitrack.model.VehicleCategory;
import com.logap.logitrack.repository.DashboardRepository;

@Service
public class DashboardService {

    private final DashboardRepository dashboardRepository;

    public DashboardService(DashboardRepository dashboardRepository) {
        this.dashboardRepository = dashboardRepository;

    }

    public TotalKmResponse totalKm(Integer veiculoId) {

        return new TotalKmResponse(veiculoId, dashboardRepository.totalKm(veiculoId));
    }

    public List<CategoryVolumeResponse> categoryVolume(VehicleCategory vehicleCategory) {

        return dashboardRepository.categoryVolume(vehicleCategory);
    }
}
