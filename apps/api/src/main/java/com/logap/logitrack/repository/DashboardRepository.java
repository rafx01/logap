package com.logap.logitrack.repository;

import java.sql.Types;
import java.util.List;

import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;

import com.logap.logitrack.dto.CategoryVolumeResponse;
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

}
