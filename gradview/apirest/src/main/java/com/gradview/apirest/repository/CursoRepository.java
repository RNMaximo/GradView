package com.gradview.apirest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gradview.apirest.models.Curso;

public interface CursoRepository extends JpaRepository<Curso, Long>{
	
	Curso findByCodigo(String codigo);
	
	
}
