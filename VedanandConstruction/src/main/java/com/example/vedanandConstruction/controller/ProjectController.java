package com.example.vedanandConstruction.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.vedanandConstruction.entity.Project;
import com.example.vedanandConstruction.entity.ProjectStages;
import com.example.vedanandConstruction.service.ProjectService;

@RestController
@CrossOrigin("*")
@RequestMapping("")
public class ProjectController {
	@Autowired
	private ProjectService pservice;

	@PostMapping("/psdetails")
	public ProjectStages getProjectStagesDetails(@RequestBody ProjectStages projectStages) {
		return pservice.addProjectSatgeDetails(projectStages);
	}

	@PostMapping("/addProject")
	public Project addNewProject(@RequestBody Project project) {
		return pservice.addProject(project);
	}

	@GetMapping("/getAllProjects")
	public List<Project> getAll() {
		return pservice.getAllProjects();
	}
}
