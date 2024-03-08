package com.example.vedanandConstruction.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.vedanandConstruction.entity.Jobs;
import com.example.vedanandConstruction.entity.Material;
import com.example.vedanandConstruction.entity.User;
import com.example.vedanandConstruction.repository.JobRepository;
import com.example.vedanandConstruction.repository.MaterialRepository;
import com.example.vedanandConstruction.repository.UserRepository;

@Service
public class JobService {
	@Autowired
	private JobRepository jobrepo;

	public List<Jobs> getJob() {
		List<Jobs> j = jobrepo.findAll();
		return j;
	}

	public void addJob(Jobs job) {
		jobrepo.save(job);
	}

}
