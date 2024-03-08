package com.example.vedanandConstruction.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.vedanandConstruction.entity.Material;
import com.example.vedanandConstruction.service.MaterialService;

@RestController
@CrossOrigin("*")
@RequestMapping("")
public class MaterialController {
	@Autowired
	private MaterialService matService;

	@PostMapping("/addMaterial")
	public String addMaterial(@RequestBody Material mat) {
		matService.addMaterial(mat);
		return "material added";
	}

	@GetMapping("/getAllMaterial")
	public List<Material> getAllMaterial() {
		return matService.getAllMaterial();
	}

	@GetMapping("/getMaterial/{id}")
	public List<Material> getMaterial(@PathVariable int id) {
		return matService.getMaterial(id);
	}

		
}
