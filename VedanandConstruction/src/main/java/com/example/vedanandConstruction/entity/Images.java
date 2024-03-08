package com.example.vedanandConstruction.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Images {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String category;
	private String imageName;

	@ManyToOne
	@JoinColumn(name = "pId")
	private Project projectId;

	public Images() {
		// TODO Auto-generated constructor stub
	}

	public Images(Integer id, String category, String imageName, Project projectId) {
		super();
		this.id = id;
		this.category = category;
		this.imageName = imageName;
		this.projectId = projectId;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getImageName() {
		return imageName;
	}

	public void setImageName(String imageName) {
		this.imageName = imageName;
	}

	public Project getProjectId() {
		return projectId;
	}

	public void setProjectId(Project projectId) {
		this.projectId = projectId;
	}

	@Override
	public String toString() {
		return "Images [id=" + id + ", category=" + category + ", imageName=" + imageName + ", projectId=" + projectId
				+ "]";
	}

}
