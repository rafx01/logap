package com.logap.logitrack.repository;

import java.sql.Types;
import java.time.LocalDate;
import java.util.List;

import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;

import com.logap.logitrack.dto.CategoryVolumeResponse;
import com.logap.logitrack.dto.FinancialProjectionResponse;
import com.logap.logitrack.dto.MaintenanceScheduleResponse;
import com.logap.logitrack.dto.UtilizationRankingResponse;
import com.logap.logitrack.model.VehicleCategory;

@Repository
public class DashboardRepository {

    private final JdbcClient jdbc;

    public DashboardRepository(JdbcClient jdbc) {
        this.jdbc = jdbc;
    }

    public Integer totalKm(Integer veiculoId) {
        return jdbc.sql("""
                SELECT COALESCE(SUM(km_percorrida), 0)
                FROM viagens
                WHERE CAST(:veiculoId AS INTEGER) IS NULL OR veiculo_id = :veiculoId
                """)
                .param("veiculoId", veiculoId, Types.INTEGER)
                .query(Integer.class)
                .single();
    }

    public List<CategoryVolumeResponse> categoryVolume(VehicleCategory vehicleCategory) {
        return jdbc.sql("""
                SELECT ve.tipo AS tipo, COUNT(vi.id) AS quantidade
                FROM veiculos ve
                LEFT JOIN viagens vi ON vi.veiculo_id = ve.id AND vi.data_chegada IS NOT NULL
                WHERE CAST(:tipo AS VARCHAR) IS NULL OR ve.tipo = :tipo
                GROUP BY ve.tipo
                ORDER BY ve.tipo
                """)
                .param("tipo", vehicleCategory == null ? null : vehicleCategory.name(), Types.VARCHAR)
                .query((rs, i) -> new CategoryVolumeResponse(
                        VehicleCategory.valueOf(rs.getString("tipo")),
                        rs.getInt("quantidade")))
                .list();
    }

    public List<MaintenanceScheduleResponse> maintenanceSchedule(int limit) {
        return jdbc.sql("""
                SELECT m.id, m.data_inicio, m.data_finalizacao, m.tipo_servico, m.custo_estimado, m.status,
                       ve.id AS veiculo_id, ve.placa, ve.modelo
                FROM manutencoes m
                JOIN veiculos ve ON ve.id = m.veiculo_id
                WHERE m.status = 'PENDENTE'
                ORDER BY m.data_inicio, m.id
                LIMIT :limite
                """)
                .param("limite", limit)
                .query((rs, i) -> new MaintenanceScheduleResponse(
                        rs.getInt("id"),
                        rs.getInt("veiculo_id"),
                        rs.getString("placa"),
                        rs.getString("modelo"),
                        rs.getObject("data_inicio", LocalDate.class),
                        rs.getObject("data_finalizacao", LocalDate.class),
                        rs.getString("tipo_servico"),
                        rs.getBigDecimal("custo_estimado"),
                        rs.getString("status")))
                .list();
    }

    public List<UtilizationRankingResponse> utilizationRanking(int limit) {
        return jdbc.sql("""
                SELECT ve.id, ve.placa, ve.modelo, ve.tipo,
                       COALESCE(SUM(vi.km_percorrida), 0) AS km_total,
                       COUNT(vi.id) AS quantidade_viagens
                FROM veiculos ve
                LEFT JOIN viagens vi ON vi.veiculo_id = ve.id
                GROUP BY ve.id
                ORDER BY km_total DESC, ve.id
                LIMIT :limite
                """)
                .param("limite", limit)
                .query((rs, i) -> new UtilizationRankingResponse(
                        i + 1,
                        rs.getInt("id"),
                        rs.getString("placa"),
                        rs.getString("modelo"),
                        VehicleCategory.valueOf(rs.getString("tipo")),
                        rs.getBigDecimal("km_total"),
                        rs.getLong("quantidade_viagens")))
                .list();
    }

    public FinancialProjectionResponse financialProjection() {
        return jdbc.sql("""
                SELECT to_char(date_trunc('month', CURRENT_DATE), 'YYYY-MM') AS mes,
                       COALESCE(SUM(custo_estimado), 0) AS custo_total,
                       COUNT(*) AS quantidade
                FROM manutencoes

                """)
                .query((rs, i) -> new FinancialProjectionResponse(
                        rs.getString("mes"),
                        rs.getBigDecimal("custo_total"),
                        rs.getLong("quantidade")))
                .single();
    }

}
