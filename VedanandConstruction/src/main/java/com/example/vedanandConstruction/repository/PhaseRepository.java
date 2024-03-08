package com.example.vedanandConstruction.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.vedanandConstruction.entity.Phase;
import com.example.vedanandConstruction.entity.Project;

public interface PhaseRepository extends JpaRepository<Phase, Integer> {
                     
	List<Phase> findByProjectId(Project id);
}
