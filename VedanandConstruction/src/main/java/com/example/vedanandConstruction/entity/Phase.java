package com.example.vedanandConstruction.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="phases")
public class Phase {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ph_id")
	private Integer phId;
	@Column(name="ph_name")
	private String phName;
	@Column(name="ph_description")
	private String phDescription;
	
	@ManyToOne
	@JoinColumn(name = "pId")
	private Project projectId;
	
	public Phase() {
		// TODO Auto-generated constructor stub
	}

	public Phase(int phId, String phName, String phDescription, Project projectId) {
		super();
		this.phId = phId;
		this.phName = phName;
		this.phDescription = phDescription;
		this.projectId = projectId;
	}

	public int getPhId() {
		return phId;
	}

	public void setPhId(int phId) {
		this.phId = phId;
	}

	public String getPhName() {
		return phName;
	}

	public void setPhName(String phName) {
		this.phName = phName;
	}

	public String getPhDescription() {
		return phDescription;
	}

	public void setPhDescription(String phDescription) {
		this.phDescription = phDescription;
	}

	public Project getProjectId() {
		return projectId;
	}

	public void setProjectId(Project projectId) {
		this.projectId = projectId;
	}

	@Override
	public String toString() {
		return "Phase [phId=" + phId + ", phName=" + phName + ", phDescription=" + phDescription + ", projectId="
				+ projectId + "]";
	}
	
	
	
	
}
