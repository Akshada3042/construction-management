package com.example.vedanandConstruction.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.vedanandConstruction.entity.Material;
import com.example.vedanandConstruction.repository.MaterialRepository;

@Service
public class MaterialService {
	@Autowired
	private MaterialRepository materialRepo;

	public void addMaterial(Material mat) {
		materialRepo.save(mat);
	}

	public List<Material> getAllMaterial() {
		return materialRepo.findAll();
	}

}
