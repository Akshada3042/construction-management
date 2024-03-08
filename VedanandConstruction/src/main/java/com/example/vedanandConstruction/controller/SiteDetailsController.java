package com.example.vedanandConstruction.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.vedanandConstruction.entity.SiteDetails;
import com.example.vedanandConstruction.service.SiteService;

@RestController
@CrossOrigin("*")
@RequestMapping("")
public class SiteDetailsController {
	@Autowired
	private SiteService service;

	@PostMapping("/addSiteDetails")
	public SiteDetails addSiteDetails(@RequestBody SiteDetails details) {
		return service.addSiteDetails(details);
	}

	@GetMapping("/getSiteDetails/{id}")
	public SiteDetails getSiteDetails(@PathVariable int id) {
		return service.getSiteDetails(id);
	}
}
