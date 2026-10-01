package com.logap.logitrack.dto;

import com.logap.logitrack.model.VehicleCategory;

public record CategoryVolumeResponse(VehicleCategory vehicleCategory, Integer totalTrips) {

}
