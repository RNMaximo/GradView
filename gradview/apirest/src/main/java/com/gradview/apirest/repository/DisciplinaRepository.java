package com.gradview.apirest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gradview.apirest.models.Disciplina;

public interface DisciplinaRepository extends JpaRepository<Disciplina, Long>{
	
	Disciplina findBySigla(String sigla);
	
	
}
