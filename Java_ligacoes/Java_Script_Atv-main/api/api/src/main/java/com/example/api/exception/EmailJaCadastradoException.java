package com.example.api.exception;

public class EmailJaCadastradoException extends RuntimeException { // Runtime serve para que a exceção seja lançada em tempo de execução, ou seja, quando o programa estiver rodando
    public EmailJaCadastradoException(String messagem) {
        super(messagem); // super chama o construtor da classe pai, que é a RuntimeException
    }


}
