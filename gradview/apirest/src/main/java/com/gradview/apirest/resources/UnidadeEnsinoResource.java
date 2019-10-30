package com.gradview.apirest.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gradview.apirest.repository.UnidadeEnsinoRepository;
import com.gradview.apirest.models.UnidadeEnsino;

@RestController
@RequestMapping(value="/api")
public class UnidadeEnsinoResource {
	
	@Autowired
	UnidadeEnsinoRepository unidadeEnsinoRepository;
	
	@GetMapping("/unidades_ensino")
	public List<UnidadeEnsino> listaUnidadeEnsinos(){
		return unidadeEnsinoRepository.findAll();
	}
	
	@GetMapping("/unidade_ensino/{sigla}")
	public UnidadeEnsino listaUnidadeEnsino(@PathVariable(value="sigla") String sigla){
		return unidadeEnsinoRepository.findBySigla(sigla);
	}
	
	@PostMapping("/unidade_ensino")
	public UnidadeEnsino salvaUnidadeEnsino(@RequestBody UnidadeEnsino unidadeEnsino) {
		return unidadeEnsinoRepository.save(unidadeEnsino);
	}
	
	@DeleteMapping("/unidade_ensino")
	public void deletaUnidadeEnsino(@RequestBody UnidadeEnsino unidadeEnsino) {
		unidadeEnsinoRepository.delete(unidadeEnsino);
	}
	
	@PutMapping("/unidade_ensino")
	public UnidadeEnsino atualizaUnidadeEnsino(@RequestBody UnidadeEnsino unidadeEnsino) {
		return unidadeEnsinoRepository.save(unidadeEnsino);
	}
	
}