package com.example.vedanandConstruction.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.vedanandConstruction.entity.ProjectStages;
import com.example.vedanandConstruction.repository.ProjectStageRepo;

@Service
public class ProjectService {

	@Autowired
	private ProjectStageRepo psrepo;
	
	public ProjectStages addProjectSatgeDetails(ProjectStages projectSatges)
	{
		System.out.println(projectSatges);
		return psrepo.save(projectSatges);
		
	}
	
}
