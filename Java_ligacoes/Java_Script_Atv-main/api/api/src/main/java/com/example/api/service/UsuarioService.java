package com.example.api.service;

import com.example.api.exception.EmailJaCadastradoException;
import com.example.api.model.Usuario;
import com.example.api.repository.UsuarioRepository;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import java.util.List;
@Service
@Validated

public class UsuarioService {
    private UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    public List<Usuario> ListarTodos() {
        return usuarioRepository.findAll();
    }
    public Usuario salvar (Usuario usuario) {
        if (usuarioRepository.existsByEmail(usuario.getEmail())) {
            throw new EmailJaCadastradoException("Email já cadastrado");
        }
        return usuarioRepository.save(usuario);
    }
}
