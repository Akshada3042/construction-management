package com.example.vedanandConstruction.controller;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.vedanandConstruction.entity.Jobs;
import com.example.vedanandConstruction.entity.Material;
import com.example.vedanandConstruction.entity.User;
import com.example.vedanandConstruction.service.JobService;

@RestController
@CrossOrigin("*")
@RequestMapping("")
public class JobController {
	@Autowired
	private JobService jservice;

	@GetMapping("/getall")
	public List<Jobs> getAllJobs() {
		return jservice.getJob();
	}

	@PostMapping("/addJob")
	public String addJob(@RequestBody Jobs job) {
		jservice.addJob(job);
		return "job added";
	}

}
