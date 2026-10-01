package com.logap.logitrack.dto;

import com.logap.logitrack.model.VehicleCategory;

public record VehicleResponse(
        Integer Id,
        String Plate,
        String Model,
        VehicleCategory category,
        Integer year) {

}
