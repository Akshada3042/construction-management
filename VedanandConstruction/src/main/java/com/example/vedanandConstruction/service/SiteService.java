package com.example.vedanandConstruction.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.vedanandConstruction.entity.Project;
import com.example.vedanandConstruction.entity.SiteDetails;
import com.example.vedanandConstruction.repository.SiteDetailsRepository;

@Service
public class SiteService {
	@Autowired
	private SiteDetailsRepository detailsRepository;

	public SiteDetails addSiteDetails(SiteDetails details) {
		return detailsRepository.save(details);
	}

	public SiteDetails getSiteDetails(int id) {
		Project p1 = new Project();
		p1.setpId(id);
		return detailsRepository.findByProjectId(p1);
	}

}
