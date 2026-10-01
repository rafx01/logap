package com.logap.logitrack.dto;

import com.logap.logitrack.model.VehicleCategory;

public record VehicleResponse(
                Integer id,
                String placa,
                String modelo,
                VehicleCategory tipo,
                Integer ano) {

}
