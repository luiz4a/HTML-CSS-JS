package com.example.api.repository;

import com.example.api.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository  extends JpaRepository<Usuario, Long> {
    boolean existsByEmail(String email);
}
