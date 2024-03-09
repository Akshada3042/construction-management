package com.example.vedanandConstruction.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.vedanandConstruction.entity.Jobs;

public interface JobRepository extends JpaRepository<Jobs, Integer>{

}
