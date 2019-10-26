package com.gradview.apirest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gradview.apirest.models.UnidadeEnsino;

public interface UnidadeEnsinoRepository extends JpaRepository<UnidadeEnsino, Long>{
	
	UnidadeEnsino findBySigla(String sigla);
	
	
}
