package com.logap.logitrack.service;

import org.springframework.stereotype.Service;

import com.logap.logitrack.dto.TotalKm;
import com.logap.logitrack.repository.DashboardRepository;

@Service
public class DashboardService {

    private final DashboardRepository dashboardRepository;

    public DashboardService(DashboardRepository dashboardRepository) {
        this.dashboardRepository = dashboardRepository;

    }

    public TotalKm totalKm(Integer veiculoId) {

        return new TotalKm(veiculoId, dashboardRepository.totalKm(veiculoId));
    }

}
