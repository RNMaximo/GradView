package com.gradview.apirest.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="CURSOS")
public class Curso {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	@Column(unique = true)
	private String codigo;
	private String nome;
	private char nivel; // (G,D,M,S,A,E,R,U)
	private String periodo; // Integral, Noturno, etc
	private long unidade_ensino; //  Chave estrangeira
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getCodigo() {
		return codigo;
	}
	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public char getNivel() {
		return nivel;
	}
	public void setNivel(char nivel) {
		this.nivel = nivel;
	}
	public String getPeriodo() {
		return periodo;
	}
	public void setPeriodo(String periodo) {
		this.periodo = periodo;
	}
	public long getUnidade_ensino() {
		return unidade_ensino;
	}
	public void setUnidade_ensino(long unidade_ensino) {
		this.unidade_ensino = unidade_ensino;
	}
	
	
}
