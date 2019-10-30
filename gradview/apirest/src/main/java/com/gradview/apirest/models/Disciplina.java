package com.gradview.apirest.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="DISCIPLINAS")
public class Disciplina {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	@Column(unique = true)
	private String sigla;
	private String nome;
	private char nivel; // Grad ou Pos
	private int oferecimento; // 1,2,5 ou 6
	private int[] vetor; // Obedecendo ordenamento da DAC
	private long[] prerequisitos; // Conjuntos de prereq - chave estrangeira
	private long[] equivalencias; // Conjuntos de equivalencias - chave estrangeira
	private String ementa;
	private String bibliografia;
	private long unidade_ensino; //  Chave estrangeira
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getSigla() {
		return sigla;
	}
	public void setSigla(String sigla) {
		this.sigla = sigla;
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
	public int getOferecimento() {
		return oferecimento;
	}
	public void setOferecimento(int oferecimento) {
		this.oferecimento = oferecimento;
	}
	public int[] getVetor() {
		return vetor;
	}
	public void setVetor(int[] vetor) {
		this.vetor = vetor;
	}
	public long[] getPrerequisitos() {
		return prerequisitos;
	}
	public void setPrerequisitos(long[] prerequisitos) {
		this.prerequisitos = prerequisitos;
	}
	public long[] getEquivalencias() {
		return equivalencias;
	}
	public void setEquivalencias(long[] equivalencias) {
		this.equivalencias = equivalencias;
	}
	public String getEmenta() {
		return ementa;
	}
	public void setEmenta(String ementa) {
		this.ementa = ementa;
	}
	public String getBibliografia() {
		return bibliografia;
	}
	public void setBibliografia(String bibliografia) {
		this.bibliografia = bibliografia;
	}
	public long getUnidade_ensino() {
		return unidade_ensino;
	}
	public void setUnidade_ensino(long unidade_ensino) {
		this.unidade_ensino = unidade_ensino;
	}
	
}
