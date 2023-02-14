package io.github.romulogurgeldev.agendaapi.model.repository;

import io.github.romulogurgeldev.agendaapi.model.entity.Contato;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContatoRepository extends JpaRepository<Contato, Integer> {
}
