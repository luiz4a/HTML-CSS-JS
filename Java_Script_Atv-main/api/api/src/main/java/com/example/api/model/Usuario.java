package com.example.api.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @NotBlank(message = "Nome é obrigatório")
    private String nome;

    @Column(nullable = false)
    @NotBlank(message = "Telefone é obrigatório")
    @Size(min = 11, max = 11, message = "Telefone inválido")
    private String telefone;

    @Column(nullable = false)
    @NotBlank(message = "CPF è orbigatório")
    @Size(min = 11, max = 11, message = "CPF Inválido")
    private String cpf;

    @Column(nullable = false)
    @NotBlank(message = "CEP é obrigatório")
    @Size(min = 8, max = 8,  message = "CEP deve ter  no minimo 8 caracteres")
    private String cep;

    @Column(nullable = false)
    @NotBlank(message = "Email é obrigatório")
    @Email(message = "Email inválido")
    private String email;

    @Column(nullable = false)
    @NotBlank(message = "Senha é obrigatória")
    @Size(min = 6, max = 20, message = "Senha deve ter pelo menos 6 caracteres")
    private String senha;

    public Usuario() {
    }

    public Usuario(Long id, String nome, String telefone, String cpf, String cep, String email, String senha) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.cpf = cpf;
        this.cep = cep;
        this.email = email;
        this.senha = senha;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public @NotBlank(message = "Nome é obrigatório") String getNome() {
        return nome;
    }

    public void setNome(@NotBlank(message = "Nome é obrigatório") String nome) {
        this.nome = nome;
    }

    public @NotBlank(message = "Telefone é obrigatório") @Size(min = 11, message = "Telefone inválido") String getTelefone() {
        return telefone;
    }

    public void setTelefone(@NotBlank(message = "Telefone é obrigatório") @Size(min = 11, message = "Telefone inválido") String telefone) {
        this.telefone = telefone;
    }

    public @NotBlank(message = "CPF è orbigatório") @Size(min = 11, message = "CPF Inválido") String getCpf() {
        return cpf;
    }

    public void setCpf(@NotBlank(message = "CPF è orbigatório") @Size(min = 11, message = "CPF Inválido") String cpf) {
        this.cpf = cpf;
    }

    public @NotBlank(message = "CEP é obrigatório") @Size(min = 8, message = "CEP deve ter  no minimo 8 caracteres") String getCep() {
        return cep;
    }

    public void setCep(@NotBlank(message = "CEP é obrigatório") @Size(min = 8, message = "CEP deve ter  no minimo 8 caracteres") String cep) {
        this.cep = cep;
    }

    public @NotBlank(message = "Email é obrigatório") @Email(message = "Email inválido") String getEmail() {
        return email;
    }

    public void setEmail(@NotBlank(message = "Email é obrigatório") @Email(message = "Email inválido") String email) {
        this.email = email;
    }

    public @NotBlank(message = "Senha é obrigatória") @Size(min = 6, message = "Senha deve ter pelo menos 6 caracteres") String getSenha() {
        return senha;
    }

    public void setSenha(@NotBlank(message = "Senha é obrigatória") @Size(min = 6, message = "Senha deve ter pelo menos 6 caracteres") String senha) {
        this.senha = senha;
    }
}