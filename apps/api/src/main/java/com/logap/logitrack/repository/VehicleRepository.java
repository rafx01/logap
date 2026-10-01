package com.logap.logitrack.repository;

import java.util.List;

import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;

import com.logap.logitrack.dto.VehicleResponse;

@Repository
public class VehicleRepository {
    private final JdbcClient jdbc;

    public VehicleRepository(JdbcClient jdbc) {
        this.jdbc = jdbc;
    }

    public List<VehicleResponse> allVehicles() {
        return jdbc.sql("""
                SELECT id, placa, modelo, tipo, ano
                FROM veiculos
                ORDER BY modelo
                """).query(VehicleResponse.class).list();
    }

}
