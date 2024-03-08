package com.example.vedanandConstruction.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.vedanandConstruction.entity.Phase;
import com.example.vedanandConstruction.entity.Project;
import com.example.vedanandConstruction.repository.PhaseRepository;

@Service
public class PhaseService {
	
	@Autowired
	private PhaseRepository phrepo;

	public void addPhase(Phase phase) {
		System.out.println(phase);
		phrepo.save(phase);
	}
	
	public List<Phase> getPhase(int id) {
		Project p1=new Project();
		p1.setpId(id);
		return phrepo.findByProjectId(p1);
	}

	
}
