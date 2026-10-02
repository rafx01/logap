package com.logap.logitrack.dto;

import java.math.BigDecimal;

import com.logap.logitrack.model.VehicleCategory;

public record UtilizationRankingResponse(
        int posicao,
        Integer veiculoId,
        String placa,
        String modelo,
        VehicleCategory tipo,
        BigDecimal kmTotal,
        long quantidadeViagens) {
}
