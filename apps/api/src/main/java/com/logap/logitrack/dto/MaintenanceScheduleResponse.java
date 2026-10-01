package com.logap.logitrack.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

public record MaintenanceScheduleResponse(
        Integer id,
        Integer veiculoId,
        String placa,
        String modelo,
        LocalDate dataInicio,
        LocalDate dataFinalizacao,
        String tipoServico,
        BigDecimal custoEstimado,
        String status) {
}
