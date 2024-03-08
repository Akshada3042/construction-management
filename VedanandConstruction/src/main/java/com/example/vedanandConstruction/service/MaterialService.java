package com.example.vedanandConstruction.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.vedanandConstruction.entity.Material;
import com.example.vedanandConstruction.entity.Project;
import com.example.vedanandConstruction.repository.MaterialRepository;

@Service
public class MaterialService {
	@Autowired
	private MaterialRepository materialRepo;

	public void addMaterial(Material mat) {
		System.out.println(mat);
		materialRepo.save(mat);
	}

	public List<Material> getAllMaterial() {
		return materialRepo.findAll();
	}

	public List<Material> getMaterial(int id) {
		Project p1=new Project();
		p1.setpId(id);
		return materialRepo.findByProjectId(p1);
	}

}
