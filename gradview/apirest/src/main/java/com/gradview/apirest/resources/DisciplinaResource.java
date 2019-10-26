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

import com.gradview.apirest.repository.DisciplinaRepository;
import com.gradview.apirest.models.Disciplina;

@RestController
@RequestMapping(value="/api")
public class DisciplinaResource {
	
	@Autowired
	DisciplinaRepository disciplinaRepository;
	
	@GetMapping("/disciplinas")
	public List<Disciplina> listaDisciplinas(){
		return disciplinaRepository.findAll();
	}
	
	@GetMapping("/disciplina/{sigla}")
	public Disciplina listaDisciplina(@PathVariable(value="sigla") String sigla){
		return disciplinaRepository.findBySigla(sigla);
	}
	
	@PostMapping("/disciplina")
	public Disciplina salvaDisciplina(@RequestBody Disciplina disciplina) {
		return disciplinaRepository.save(disciplina);
	}
	
	@DeleteMapping("/disciplina")
	public void deletaDisciplina(@RequestBody Disciplina disciplina) {
		disciplinaRepository.delete(disciplina);
	}
	
	@PutMapping("/disciplina")
	public Disciplina atualizaDisciplina(@RequestBody Disciplina disciplina) {
		return disciplinaRepository.save(disciplina);
	}
	
}
