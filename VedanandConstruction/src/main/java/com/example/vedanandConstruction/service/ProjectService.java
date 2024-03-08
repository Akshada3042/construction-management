package com.example.vedanandConstruction.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.vedanandConstruction.entity.Material;
import com.example.vedanandConstruction.entity.Project;

import com.example.vedanandConstruction.entity.ProjectStages;
import com.example.vedanandConstruction.repository.MaterialRepository;
import com.example.vedanandConstruction.repository.ProjectRepository;
import com.example.vedanandConstruction.repository.ProjectStageRepo;

@Service
public class ProjectService {

	@Autowired
	private ProjectStageRepo psrepo;


	@Autowired
	private ProjectRepository projectRepository;

	public ProjectStages addProjectSatgeDetails(ProjectStages projectSatges) {
		return psrepo.save(projectSatges);

	}
	
	public List<Project> getAllProjects(){
		return projectRepository.findAll(); 
	}
	
	public Project addProject(Project project) {
		
		return projectRepository.save(project);
	}
	
//	  public Project createProject(Project project) {
//	        Set project reference for each material
//	        for(Material material : project.getMaterials()) {
//	            material.setProject(project);
//	        }
//	        return projectRepository.save(project);
//	    }

}
