package io.github.romulogurgeldev.model.repository;

import io.github.romulogurgeldev.model.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
}
