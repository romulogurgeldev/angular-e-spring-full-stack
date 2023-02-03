package io.github.romulogurgeldev.exception;

public class UsuarioCadastradoException extends RuntimeException{
    public UsuarioCadastradoException(String login){
        super("Usuário já cadastrado para o Login: " + login);
    }
}
