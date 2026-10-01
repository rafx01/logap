package com.logap.logitrack.repository;

import java.sql.Types;

import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;

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

}
