package com.example.vedanandConstruction.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@Entity
public class Project {
	@Id
	private Integer pId;
	private String pName;

//	@OneToMany(mappedBy = "projectId", cascade = CascadeType.ALL)
//	private List<Material> materials = new ArrayList<>();

	public Project() {
		// TODO Auto-generated constructor stub
	}

	public Project(Integer pId, String pName) {
		super();
		this.pId = pId;
		this.pName = pName;
	}

	public Integer getpId() {
		return pId;
	}

	public void setpId(Integer pId) {
		this.pId = pId;
	}

	public String getpName() {
		return pName;
	}

	public void setpName(String pName) {
		this.pName = pName;
	}

	@Override
	public String toString() {
		return "Project [pId=" + pId + ", pName=" + pName + "]";
	}

}
