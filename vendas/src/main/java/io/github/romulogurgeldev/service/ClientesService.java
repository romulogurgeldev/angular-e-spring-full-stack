package io.github.romulogurgeldev.service;
import io.github.romulogurgeldev.model.Cliente;
import io.github.romulogurgeldev.repository.ClientesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientesService {

    private ClientesRepository repository;
    @Autowired
    public ClientesService(ClientesRepository repository){
        this.repository = repository;
    }
    public void salvarCliente(Cliente cliente) {
        validarCliente(cliente);
        this.repository.persistir(cliente);
    }

    private void validarCliente(Cliente cliente) {
        //Aplica validações
    }
}
