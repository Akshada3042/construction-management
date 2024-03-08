package com.example.vedanandConstruction.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.vedanandConstruction.entity.Project;
import com.example.vedanandConstruction.entity.SiteDetails;

public interface SiteDetailsRepository extends JpaRepository<SiteDetails,Integer>{

	SiteDetails findByProjectId(Project id);
}
