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

import com.gradview.apirest.repository.CursoRepository;
import com.gradview.apirest.models.Curso;

@RestController
@RequestMapping(value="/api")
public class CursoResource {
	
	@Autowired
	CursoRepository cursoRepository;
	
	@GetMapping("/cursos")
	public List<Curso> listaCursos(){
		return cursoRepository.findAll();
	}
	
	@GetMapping("/curso/{codigo}")
	public Curso listaCurso(@PathVariable(value="codigo") String codigo){
		return cursoRepository.findByCodigo(codigo);
	}
	
	@PostMapping("/curso")
	public Curso salvaCurso(@RequestBody Curso curso) {
		return cursoRepository.save(curso);
	}
	
	@DeleteMapping("/curso")
	public void deletaCurso(@RequestBody Curso curso) {
		cursoRepository.delete(curso);
	}
	
	@PutMapping("/curso")
	public Curso atualizaCurso(@RequestBody Curso curso) {
		return cursoRepository.save(curso);
	}
	
}