package com.example.vedanandConstruction.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.vedanandConstruction.entity.Material;
import com.example.vedanandConstruction.entity.Project;

public interface MaterialRepository extends JpaRepository<Material, Integer> {

	List<Material> findByProjectId(Project id);
}
