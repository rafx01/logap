package com.logap.logitrack.dto;

import java.math.BigDecimal;

public record FinancialProjectionResponse(String mes, BigDecimal custoTotal, long quantidadeManutencoes) {
}
