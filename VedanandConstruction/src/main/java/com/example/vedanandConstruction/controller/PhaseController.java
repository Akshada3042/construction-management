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

import com.example.vedanandConstruction.entity.Phase;
import com.example.vedanandConstruction.service.PhaseService;

@RestController
@CrossOrigin("*")
@RequestMapping("")
public class PhaseController {

	@Autowired
	private PhaseService phservice;
	
	@PostMapping("/addPhase")
	public String addPhase(@RequestBody Phase phase) {
		phservice.addPhase(phase);
		return "phases added";
	}
	
	@GetMapping("/getPhase/{id}")
	public List<Phase> getPhase(@PathVariable int id) {
		return phservice.getPhase(id);
	}


}
