package com.logap.logitrack.controller;

import com.logap.logitrack.service.DashboardService;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.logap.logitrack.dto.CategoryVolumeResponse;
import com.logap.logitrack.dto.FinancialProjectionResponse;
import com.logap.logitrack.dto.MaintenanceScheduleResponse;
import com.logap.logitrack.dto.TotalKmResponse;
import com.logap.logitrack.dto.UtilizationRankingResponse;
import com.logap.logitrack.model.VehicleCategory;

@RestController
@RequestMapping
public class DashboardController {

    private final DashboardService dashboardService;

    DashboardController(DashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    @GetMapping("/total-km")
    public TotalKmResponse totalKm(@RequestParam(required = false) Integer vehicleId) {
        return dashboardService.totalKm(vehicleId);
    }

    @GetMapping("/category-volume")
    public List<CategoryVolumeResponse> categoryVolume(@RequestParam(required = false) VehicleCategory category) {
        return dashboardService.categoryVolume(category);
    }

    @GetMapping("/maintenance-schedule")
    public List<MaintenanceScheduleResponse> maintenanceSchedule() {
        return dashboardService.maintenanceSchedule();
    }

    @GetMapping("/utilization-ranking")
    public List<UtilizationRankingResponse> utilizationRanking() {
        return dashboardService.utilizationRanking();
    }

    @GetMapping("/financial-projection")
    public FinancialProjectionResponse financialProjection() {
        return dashboardService.financialProjection();
    }

}